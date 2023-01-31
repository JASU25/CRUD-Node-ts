import {Response, Request} from 'express';
import Especialidades from '../models/especialidades';


export const especialidadGet = async(req:Request, res:Response)=>{
    try{
        let especialidad =  await Especialidades.findAll();
        
       
        res.json({especialidad});
    }catch(error){
        console.log(error);
        return res.status(500).json({
            msg: 'Ocurrió un error favor de comunicarse con soporte',
            error: true
        })
    }
}

export const especialidadIdGet = async(req:Request, res:Response)=>{
    const {id} = req.params;
    try{
        const especialidad = await Especialidades.findByPk(id);
        res.json({especialidad})
    }catch(error){
        console.log(error);
        return res.status(500).json({
            msg: 'Ocurrió un error favor de comunicarse con soporte',
            error: true
        })
    }
 }

export const especialidadPost = async(req:Request, res:Response)=>{

    try{
      const {nombreEspecialidad} = req.body;
       
      const especialidad = new Especialidades({nombreEspecialidad});
      
        //Guardar en BD
        await especialidad.save();
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

export const especialidadDelete = async(req:Request, res:Response) => {

    const {id} = req.params;
    try{
        const especialidad = await Especialidades.destroy({where:{idespecialidad:id}})
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


export const especialidadPut = async(req:Request, res:Response) => {
    const {id} = req.params;
    const {nombreEspecialidad } = req.body;
    try{
        const especialidad = await Especialidades.update({nombreEspecialidad}, {
            where: {
            idespecialidad: id
            }
        });

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

