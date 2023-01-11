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
exports.validarJWT = void 0;
const express_1 = require("express");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const medicos_1 = __importDefault(require("../models/medicos"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const validarJWT = (req = express_1.request, res = express_1.response, next) => __awaiter(void 0, void 0, void 0, function* () {
    const token = req.header('Authorization');
    if (!token) {
        return res.status(401).json({
            msg: 'No hay token en la petición',
            error: true
        });
    }
    try {
        const { id } = jsonwebtoken_1.default.verify(token, process.env.SECRETORPRIVATEKEY || '');
        console.log(id);
        let usuario = yield medicos_1.default.findByPk(id);
        if (!usuario) {
            return res.status(401).json({
                msg: 'Token no válido - usuario no existe DB',
                error: true
            });
        }
        if (!usuario.dataValues.activo) {
            return res.status(401).json({
                msg: 'Token no válido - usuario con estado: false',
                error: true
            });
        }
        next();
    }
    catch (error) {
        console.log(error);
        res.status(401).json({
            msg: 'Token no válido',
            error: true
        });
    }
});
exports.validarJWT = validarJWT;
//# sourceMappingURL=validar-jwt.js.map