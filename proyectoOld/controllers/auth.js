const { response } = require("express");
const Medico = require('../../models/medicos');
const bcryptjs = require('bcryptjs');
const { generarJWT } = require("../helpers/generar-jwt");

const login = async(req, res = response) =>{
    const {correo, password} = req.body;
    try{
        //verifica si el email existe   
        const medico = await Medico.findOne({where: {correo}});
        if(!medico){
            return res.status(400).json({
                msg: 'Usuario / Password no son correctos - correo'
            });
        }

        //si el usuario esta activo
        if(!medico.activo){
            return res.status(400).json({
                msg: 'Usuario / Password no son correctos - estado: flase'
            })
        }

        //verificar la contraseña
        const validarpassword = bcryptjs.compareSync(password, medico.password);
        if(!validarpassword){
            return res.status(400).json({
                msg: 'Usuario / Password no son correctos - password'
            })
        }

        //generar el jwt
        const token = await generarJWT(medico.idMedico);

        res.json({
            medico,
            token
        })
    }catch(error){
        console.log(error);
        return res.status(500).json({
            msg: 'Hablar con el administrador'
        })
    }
}

module.exports = {
    login
}