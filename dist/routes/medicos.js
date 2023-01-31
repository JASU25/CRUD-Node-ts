"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const medicos_1 = require("../controllers/medicos");
const middlewares_1 = require("../middlewares");
const router = (0, express_1.Router)();
router.post('/', [
    middlewares_1.validarJWT,
    (0, express_validator_1.check)('nombres', 'El nombre es obligatorio').isString().not().isEmpty(),
    (0, express_validator_1.check)('apellidos', 'El apellidos es obligatorio').isString().not().isEmpty(),
    (0, express_validator_1.check)('correo', 'El correo es obligatorio').isEmail(),
    (0, express_validator_1.check)('sexo').isIn(['F', 'M']),
    (0, express_validator_1.check)('activo', 'El nombre es obligatorio').isBoolean(),
    (0, express_validator_1.check)('cedula', 'La cedula es obligatorio').not().isEmpty(),
    (0, express_validator_1.check)('idEspecialidad', 'La idEspecialidad es obligatorio').isInt(),
    middlewares_1.validarPassword,
    middlewares_1.validarCampos
], medicos_1.medicoPost);
router.get('/:id', medicos_1.medicoIdGet);
router.get('/', medicos_1.medicoGet);
router.delete('/:id', [middlewares_1.validarJWT,], medicos_1.medicoDelete);
router.put('/activo/:id', [
    middlewares_1.validarJWT,
    (0, express_validator_1.check)('activo').isBoolean(),
    middlewares_1.validarCampos
], medicos_1.medicoActivo);
router.put('/:id', [middlewares_1.validarJWT], medicos_1.medicoPut);
exports.default = router;
//# sourceMappingURL=medicos.js.map