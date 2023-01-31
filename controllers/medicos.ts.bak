import {Response, Request} from 'express';
import Medicos from '../models/medicos';
import  bycrypjs from 'bcryptjs';


export const medicoGet = async(req:Request, res:Response)=>{
    try{
        const medico =  await Medicos.findAll({where:{activo : true}})
        res.json({medico});
    }catch(error){
        console.log(error);
        return res.status(500).json({
            msg: 'Ocurrió un error favor de comunicarse con soporte',
            error: true
        })
    }
}

export const medicoIdGet = async(req:Request, res:Response)=>{
    const {id} = req.params;
    try{
        const medico = await Medicos.findByPk(id);
        res.json({medico})
    }catch(error){
        console.log(error);
        return res.status(500).json({
            msg: 'Ocurrió un error favor de comunicarse con soporte',
            error: true
        })
    }
 }

export const medicoPost = async(req:Request, res:Response)=>{

    try{
      const {nombres,apellidos,correo,sexo,activo,cedula,especialidad} = req.body;
      let {password} = req.body;
        //Encriptar la contraseña
        const salt = bycrypjs.genSaltSync();
        password= bycrypjs.hashSync(password, salt);
      const medico = new Medicos({nombres,apellidos,correo,password,sexo,activo,cedula,especialidad});
      
        //Guardar en BD
        await medico.save();
        res.json({
            msg:'Guardado correctamente',
            error: false
        });
    }catch(error){
        console.log(error);
        return res.status(500).json({
            msg: 'Ocurrió un error favor de comunicarse con soporte',
            error: true
        })
    }
}

export const medicoDelete = async(req:Request, res:Response) => {

    const {id} = req.params;
    try{
        const medico = await Medicos.destroy({where:{idMedico:id}})
        res.json({
            msg: 'Se realizó el borrado',
            error: false
        });

    }catch(error){
        console.log(error);
        return res.status(500).json({
            msg: 'Ocurrió un error favor de comunicarse con soporte',
            error: true
        })
    }
}

export const medicoActivo = async(req:Request, res:Response) => {
    const {id} = req.params;
    const {activo} = req.body;

    try{
        const medico = await Medicos.update({ activo: activo }, {
            where: {
            idMedico: id
            }
        });

        res.json({
            msg: 'Se realizó actualización',
            error: false
        })
    }catch(error){
        console.log(error);
        return res.status(500).json({
            msg: 'Ocurrió un error favor de comunicarse con soporte',
            error: true
        });
    }


  }


export const medicoPut = async(req:Request, res:Response) => {
    const {id} = req.params;
    const {nombres ,apellidos,activo,especialidad,cedula} = req.body;
    try{
        const medico = await Medicos.update({nombres,apellidos,activo,especialidad,cedula}, {
            where: {
            idMedico: id
            }
        });
        console.log(medico);
        res.json({
            msg: 'Se actualizaron los datos',
            error: false
        });
    }catch(error){
        console.log(error);
        return res.status(500).json({
            msg: 'Ocurrió un error favor de comunicarse con soporte',
            error: true
        });
    }
}

