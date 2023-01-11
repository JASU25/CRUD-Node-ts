const express = require('express')
const cors = require('cors');
const db = require('../database/config');

class Server{

    constructor(){
        this.app = express();
        this.port = process.env.PORT || 8080;
        this.medicosPath = '/api/medicos';
        this.authPath = '/api/auth';

        this.conectarDB();

         //Middlewares
         this.middlewares();
         //Rutas de mi aplicacion
         this.routes();
    }

     conectarDB(){
           db.authenticate().then(() =>{
                console.log('Base de datos online');
         }).catch(err =>{
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
        this.app.use(this.medicosPath, require('../routes/medicos'));
        this.app.use(this.authPath, require('../routes/auth'));
    }

    listen(){
        this.app.listen(this.port,() => {
            console.log('Servidor corriendo en puerto', this.port);
        });
    }

}

module.exports = Server;