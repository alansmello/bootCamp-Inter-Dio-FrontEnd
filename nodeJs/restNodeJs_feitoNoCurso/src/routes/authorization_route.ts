import {Router, Request, Response, NextFunction} from "express";
import ForbiddenError from '../models/errors/forbiddenerror.models';
import userRepository from '../repositories/user.repository';
import JWT, { SignOptions } from 'jsonwebtoken'
import { StatusCodes } from 'http-status-codes';
import basicAuthenticationMiddleware from '../middlewares/basic-authenticationmiddleware';
import jwtAuthenticationMiddleware from '../middlewares/jwt-authentication.middleware';

/*
        "iss" - O domínio da aplicação geradora do token;
        "sub" - É o assunto do token, mas é muito utilizado para guardar o ID do usuário;
        "aud" - Define quem pode usar o token;
        "exp" - Data para expiração do token;
        "nbf" - Define uma data para qual o token não pode ser aceito antes dela;
        "iat" - Data de criação do token;
        "jti" - o id do token.
        */


const authorizationRoute = Router();


authorizationRoute.post('/token/validate', jwtAuthenticationMiddleware, (req: Request, res:Response, next:NextFunction)=>{
    res.sendStatus(StatusCodes.OK);
})


authorizationRoute.post('/token',basicAuthenticationMiddleware, async (req:Request, res: Response, next:NextFunction)=>{

    try {
        
        const user = req.user;
        
        if(!user){
            throw new ForbiddenError('Usuário não informado');
        }

        const jwtPayload = {username: user.username};
        const jwtOptions: SignOptions = {subject:user?.uuid, expiresIn: '15m'};
        const secretKey = 'my_secret_key'; 
        
        const jwt = JWT.sign(jwtPayload, secretKey, jwtOptions);

        res.status(StatusCodes.OK).json({token: jwt})

        
    } catch (error) {
        next(error)
    }
    
})



export default authorizationRoute;