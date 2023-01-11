"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validarPassword = void 0;
const password_validator_1 = __importDefault(require("password-validator"));
const validarPassword = (req, res, next) => {
    var schema = new password_validator_1.default();
    schema.is().min(8)
        .is().max(100)
        .has().uppercase()
        .has().lowercase()
        .has().digits(1)
        .symbols(1)
        .has().not().spaces();
    if (!schema.validate(req.body.password)) {
        return res.status(400).json({
            msg: `El password ${req.body.password} no es valido`,
            error: true
        });
    }
    next();
};
exports.validarPassword = validarPassword;
//# sourceMappingURL=validar-password.js.map