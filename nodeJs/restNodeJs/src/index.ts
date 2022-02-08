import express, {Request, Response, NextFunction} from 'express';
import errorHandler from './middlewares/error-handler.middleware';
import statusRoute from './routes/status.route';
import usersRoute from './routes/users.route';



const app = express();

//Configurações da Aplicação
app.use(express.json())
app.use(express.urlencoded({extended:true}))

//Configurações de Rotas
app.use(statusRoute);
app.use(usersRoute);

//Configuração dos Handlers de Erro
app.use(errorHandler)

//Inicialização do Servidor
app.listen(3000, ()=>{
    console.log('Aplicação executando a porta 3000!')
})

