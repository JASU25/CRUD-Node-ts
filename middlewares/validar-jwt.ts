import { response, request, NextFunction  } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';
import Usuario from '../models/medicos';

import dotenv from 'dotenv';

dotenv.config();




declare module 'jsonwebtoken' {
    export interface UserIDJwtPayload extends jwt.JwtPayload {
        id: string
    }
}

export const validarJWT = async( req = request, res = response, next:NextFunction  ) => {

    const token = req.header('Authorization');

    if ( !token ) {
        return res.status(401).json({
            msg: 'No hay token en la petición',
            error: true
        });
    }

    try {
        
        const { id } = <jwt.UserIDJwtPayload>jwt.verify( token, process.env.SECRETORPRIVATEKEY || '' );
        console.log(id)
        let usuario = await Usuario.findByPk( id);

        if( !usuario ) {
            return res.status(401).json({
                msg: 'Token no válido - usuario no existe DB',
                error: true
            })
        }
        if ( !usuario.dataValues.activo ) {
            return res.status(401).json({
                msg: 'Token no válido - usuario con estado: false',
                error: true
            })
        }
        
        next();

    } catch (error) {

        console.log(error);
        res.status(401).json({
            msg: 'Token no válido',
            error: true
        })
    }

}
