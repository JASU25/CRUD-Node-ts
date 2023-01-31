"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const especialidades_1 = require("../controllers/especialidades");
const middlewares_1 = require("../middlewares");
const router = (0, express_1.Router)();
router.post('/', [
    middlewares_1.validarJWT,
    (0, express_validator_1.check)('nombreEspecialidad', 'El nombre es obligatorio').isString().not().isEmpty(),
    middlewares_1.validarCampos
], especialidades_1.especialidadPost);
router.get('/:id', especialidades_1.especialidadIdGet);
router.get('/', especialidades_1.especialidadGet);
router.delete('/:id', [middlewares_1.validarJWT,], especialidades_1.especialidadDelete);
router.put('/:id', [middlewares_1.validarJWT], especialidades_1.especialidadPut);
exports.default = router;
//# sourceMappingURL=especialidades.js.map