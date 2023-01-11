const { response, request } = require('express');
const jwt = require('jsonwebtoken');

const Usuario = require('../models/medicos');


const validarJWT = async( req = request, res = response, next ) => {

    const token = req.header('Authorization');

    if ( !token ) {
        return res.status(401).json({
            msg: 'No hay token en la petición'
        });
    }

    try {
        
        const { id } = jwt.verify( token, process.env.SECRETORPRIVATEKEY );
        const usuario = await Usuario.findByPk( id );

        if( !usuario ) {
            return res.status(401).json({
                msg: 'Token no válido - usuario no existe DB'
            })
        }

        if ( !usuario.activo ) {
            return res.status(401).json({
                msg: 'Token no válido - usuario con estado: false'
            })
        }
        
        req.usuario = usuario;
        next();

    } catch (error) {

        console.log(error);
        res.status(401).json({
            msg: 'Token no válido'
        })
    }

}

module.exports = {
    validarJWT
}