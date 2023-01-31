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
exports.especialidadPut = exports.especialidadDelete = exports.especialidadPost = exports.especialidadIdGet = exports.especialidadGet = void 0;
const especialidades_1 = __importDefault(require("../models/especialidades"));
const especialidadGet = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let especialidad = yield especialidades_1.default.findAll();
        res.json({ especialidad });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            msg: 'Ocurrió un error favor de comunicarse con soporte',
            error: true
        });
    }
});
exports.especialidadGet = especialidadGet;
const especialidadIdGet = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const especialidad = yield especialidades_1.default.findByPk(id);
        res.json({ especialidad });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            msg: 'Ocurrió un error favor de comunicarse con soporte',
            error: true
        });
    }
});
exports.especialidadIdGet = especialidadIdGet;
const especialidadPost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { nombreEspecialidad } = req.body;
        const especialidad = new especialidades_1.default({ nombreEspecialidad });
        //Guardar en BD
        yield especialidad.save();
        res.json({
            msg: 'Guardado correctamente',
            error: false
        });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            msg: 'Ocurrió un error favor de comunicarse con soporte',
            error: true
        });
    }
});
exports.especialidadPost = especialidadPost;
const especialidadDelete = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const especialidad = yield especialidades_1.default.destroy({ where: { idespecialidad: id } });
        res.json({
            msg: 'Se realizó el borrado',
            error: false
        });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            msg: 'Ocurrió un error favor de comunicarse con soporte',
            error: true
        });
    }
});
exports.especialidadDelete = especialidadDelete;
const especialidadPut = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { nombreEspecialidad } = req.body;
    try {
        const especialidad = yield especialidades_1.default.update({ nombreEspecialidad }, {
            where: {
                idespecialidad: id
            }
        });
        res.json({
            msg: 'Se actualizaron los datos',
            error: false
        });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            msg: 'Ocurrió un error favor de comunicarse con soporte',
            error: true
        });
    }
});
exports.especialidadPut = especialidadPut;
//# sourceMappingURL=especialidades.js.map