"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const middlewares_1 = require("../middlewares");
const auth_1 = require("../controllers/auth");
const router = (0, express_1.Router)();
router.post('/', [
    (0, express_validator_1.check)('correo', 'El correo es obligatorio').isEmail(),
    (0, express_validator_1.check)('password', 'La contraseña es obligatoria').not().isEmpty(),
    middlewares_1.validarCampos
], auth_1.login);
exports.default = router;
//# sourceMappingURL=auth.js.map