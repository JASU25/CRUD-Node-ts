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
exports.medicoPut = exports.medicoActivo = exports.medicoDelete = exports.medicoPost = exports.medicoIdGet = exports.medicoGet = void 0;
const medicos_1 = __importDefault(require("../models/medicos"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const especialidades_1 = __importDefault(require("../models/especialidades"));
const medicoGet = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const medico = yield medicos_1.default.findAll({ where: { activo: true }, include: { model: especialidades_1.default, attributes: ["nombreEspecialidad"] } });
        res.json({ medico });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            msg: 'Ocurrió un error favor de comunicarse con soporte',
            error: true
        });
    }
});
exports.medicoGet = medicoGet;
const medicoIdGet = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const medico = yield medicos_1.default.findByPk(id);
        res.json({ medico });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            msg: 'Ocurrió un error favor de comunicarse con soporte',
            error: true
        });
    }
});
exports.medicoIdGet = medicoIdGet;
const medicoPost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { nombres, apellidos, correo, sexo, activo, cedula, idEspecialidad } = req.body;
        let { password } = req.body;
        //Encriptar la contraseña
        const salt = bcryptjs_1.default.genSaltSync();
        password = bcryptjs_1.default.hashSync(password, salt);
        const medico = new medicos_1.default({ nombres, apellidos, correo, password, sexo, activo, cedula, idEspecialidad });
        //Guardar en BD
        yield medico.save();
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
exports.medicoPost = medicoPost;
const medicoDelete = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const medico = yield medicos_1.default.destroy({ where: { idMedico: id } });
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
exports.medicoDelete = medicoDelete;
const medicoActivo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { activo } = req.body;
    try {
        const medico = yield medicos_1.default.update({ activo: activo }, {
            where: {
                idMedico: id
            }
        });
        res.json({
            msg: 'Se realizó actualización',
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
exports.medicoActivo = medicoActivo;
const medicoPut = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { nombres, apellidos, activo, idEspecialidad, cedula } = req.body;
    try {
        const medico = yield medicos_1.default.update({ nombres, apellidos, activo, idEspecialidad, cedula }, {
            where: {
                idMedico: id
            }
        });
        console.log(medico);
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
exports.medicoPut = medicoPut;
//# sourceMappingURL=medicos.js.map