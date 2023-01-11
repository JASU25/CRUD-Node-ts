"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = void 0;
const generar_jwt_1 = require("../helpers/generar-jwt");
const medicos_1 = __importDefault(require("../models/medicos"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { correo, password } = req.body;
    try {
        //verifica si el email existe   
        const medico = yield medicos_1.default.findOne({ where: { correo } });
        if (!medico) {
            return res.status(400).json({
                msg: 'Usuario / Password no son correctos - correo',
                error: true
            });
        }
        //si el usuario esta activo
        if (!medico.dataValues.activo) {
            return res.status(400).json({
                msg: 'Usuario / Password no son correctos - estado: flase',
                error: true
            });
        }
        //verificar la contraseña
        const validarpassword = bcryptjs_1.default.compareSync(password, medico.dataValues.password);
        if (!validarpassword) {
            return res.status(400).json({
                msg: 'Usuario / Password no son correctos - password',
                error: true
            });
        }
        //generar el jwt
        const token = yield (0, generar_jwt_1.generarJWT)(medico.dataValues.idMedico);
        res.json({
            medico,
            token
        });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            msg: 'Hablar con el administrador',
            error: true
        });
    }
});
exports.login = login;
//# sourceMappingURL=auth.js.map