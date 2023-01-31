"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const config_1 = __importDefault(require("../database/config"));
const medicos_1 = __importDefault(require("../routes/medicos"));
const auth_1 = __importDefault(require("../routes/auth"));
const especialidades_1 = __importDefault(require("../routes/especialidades"));
class Server {
    constructor() {
        this.apiPaths = {
            medicos: '/api/medicos',
            auth: '/api/auth',
            especialidades: '/api/especialidades'
        };
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || 8080;
        this.conectarDB();
        //Middlewares
        this.middlewares();
        //Rutas de mi aplicacion
        this.routes();
    }
    conectarDB() {
        config_1.default.authenticate().then(() => {
            console.log('Base de datos online');
        }).catch((err) => {
            console.log(`Se a producido un error ${err}`);
        });
    }
    middlewares() {
        //CORS
        this.app.use((0, cors_1.default)());
        //Lectura y parseo del body
        this.app.use(express_1.default.json());
    }
    routes() {
        this.app.use(this.apiPaths.medicos, medicos_1.default);
        this.app.use(this.apiPaths.auth, auth_1.default);
        this.app.use(this.apiPaths.especialidades, especialidades_1.default);
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log('Servidor corriendo en puerto', this.port);
        });
    }
}
exports.default = Server;
//# sourceMappingURL=server.js.map