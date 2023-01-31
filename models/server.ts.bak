
import express, { Application } from "express";
import cors from "cors";
import db from '../database/config';
import MedicoRoutes from '../routes/medicos';
import AuthRoutes from '../routes/auth';

class Server{
    private app: Application;
    private port: number | string;
    private apiPaths = {
        medicos: '/api/medicos',
        auth: '/api/auth'
    }

    constructor(){
        this.app = express();
        this.port = process.env.PORT || 8080;

        this.conectarDB();

         //Middlewares
        this.middlewares();
         //Rutas de mi aplicacion
         this.routes();
    }

     conectarDB(){
           db.authenticate().then(() =>{
                console.log('Base de datos online');
         }).catch((err:any) =>{
                console.log(`Se a producido un error ${err}`);
             });
    }

    middlewares(){

        //CORS
      this.app.use(cors())

        //Lectura y parseo del body
        this.app.use(express.json());
    }

    routes(){
        this.app.use(this.apiPaths.medicos, MedicoRoutes);
        this.app.use(this.apiPaths.auth, AuthRoutes);
    }

    listen(){
        this.app.listen(this.port,() => {
            console.log('Servidor corriendo en puerto', this.port);
        });
    }

}

export default Server;