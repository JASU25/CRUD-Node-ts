const { request,response } = require("express");
var passwordValidator = require('password-validator');

const validarPassword = ( req = request, res = response, next )=>{
    var schema = new passwordValidator();

    schema.is().min(8)
    .is().max(100)
    .has().uppercase()
    .has().lowercase()
    .has().digits(1)
    .symbols(1)
    .has().not().spaces();
    if(!schema.validate(req.body.password)){
        return res.status(400).json({
            msg: `El password ${req.body.password} no es valido`
        });
    }
    next();
}

module.exports = {
    validarPassword
}