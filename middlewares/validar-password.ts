import { Request,Response,NextFunction } from "express";
import passwordValidator from 'password-validator';

export const validarPassword = ( req:Request, res:Response, next:NextFunction  )=>{
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
            msg: `El password ${req.body.password} no es valido`,
            error: true
        });
    }
    next();
}
