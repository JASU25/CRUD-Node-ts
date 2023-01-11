const validarPassword= require('../middlewares/validar-password')
const validarCampos = require('../middlewares/validar-campos');
const validarJWT = require('../middlewares/validar-jwt');


module.exports = {
    ...validarCampos,
    ...validarPassword,
    ...validarJWT
}