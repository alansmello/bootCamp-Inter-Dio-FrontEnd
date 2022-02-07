import express, {Request, Response, NextFunction} from 'express';
import statusRoute from './routes/status.route';
import usersRoute from './routes/users.route';



const app = express();

//Configurações da Aplicação
app.use(express.json())
app.use(express.urlencoded({extended:true}))

//Configurações de Rotas
app.use(statusRoute);
app.use(usersRoute);


//Inicialização do Servidor
app.listen(3000, ()=>{
    console.log('Aplicação executando a porta 3000!')
})

