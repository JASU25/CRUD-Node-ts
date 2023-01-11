import { generarJWT } from "../helpers/generar-jwt";
import {Response, Request} from 'express';
import Medicos from '../models/medicos';
import  bcryptjs from 'bcryptjs';


export const login = async(req:Request, res:Response) =>{
    const {correo, password} = req.body;
    try{
        //verifica si el email existe   
        const medico = await Medicos.findOne({where: {correo}});
        if(!medico){
            return res.status(400).json({
                msg: 'Usuario / Password no son correctos - correo',
                error: true
            });
        }
        //si el usuario esta activo
        if(!medico.dataValues.activo){
            return res.status(400).json({
                msg: 'Usuario / Password no son correctos - estado: flase',
                error: true
            })
        }

        //verificar la contraseña
        const validarpassword = bcryptjs.compareSync(password, medico.dataValues.password);
        if(!validarpassword){
            return res.status(400).json({
                msg: 'Usuario / Password no son correctos - password',
                error: true
            })
        }

        //generar el jwt
        const token = await generarJWT(medico.dataValues.idMedico);

        res.json({
            medico,
            token
        })
    }catch(error){
        console.log(error);
        return res.status(500).json({
            msg: 'Hablar con el administrador',
            error: true
        })
    }
}