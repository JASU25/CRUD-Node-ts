import  Jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

export const generarJWT = (id:number = 0) =>{
    return new Promise((resolve, reject) =>{
        const payload:Number  = id;
        Jwt.sign({ id: payload }, process.env.SECRETORPRIVATEKEY || '',{
            expiresIn: '4h'
        },(err, token ) =>{
            if(err){
                console.log(err);
                reject('No se pudo generar el token')
            }else{
                resolve(token);
            }
        })
    })
}
