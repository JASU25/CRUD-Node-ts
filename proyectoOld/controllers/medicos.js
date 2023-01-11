const {response, reques} = require('express');
const Medicos = require('../models/medicos');
const bycrypjs = require('bcryptjs');

const medicoGet = async(req, res)=>{
    //Promesa
//    Medicos.findAll({where:{activo : true}}).then(medico =>{
//         res.json(medico);
//    })
//    .catch((err) =>{
//         console.log(err + 'error');
//         res.status(500).json({
//             errores: err
//         })
//     });

    //await
    try{
        const medico =  await Medicos.findAll({where:{activo : true}})
        res.json({
            medico
        });
    }catch(error){
        console.log(error);
        return res.status(500).json({
            msg: 'Ocurrió un error favor de comunicarse con soporte'
        })
    }
}

const medicoIdGet = async(req, res)=>{
    const {id} = req.params;
    //await
    try{
        const medico = await Medicos.findByPk(id);
        res.json({
            medico
        })
    }catch(error){
        console.log(error);
        return res.status(500).json({
            msg: 'Ocurrió un error favor de comunicarse con soporte'
        })
    }

    //Promesa
    // Medicos.findByPk({id}).then(medico =>{
    //      res.json(medico);
    // })
    // .catch((err) =>{
    //      console.log(err + 'error');
    //      res.status(500).json({
    //          errores: err
    //      })
    //  });
 }

const medicoPost = async(req=reques, res=response)=>{
    // Promesa
    // Medicos.create(req.body)
    // .then(medico =>{
    //     res.json(medico);
    // })
    // .catch((err) =>{
    //     console.log(err + 'error');
    //     res.status(500).json({
    //         errores: err
    //     })
    // });

    //await
    try{
      const {nombres,apellidos,correo,password,sexo,activo,cedula,especialidad} = req.body;
      const medico = new Medicos({nombres,apellidos,correo,password,sexo,activo,cedula,especialidad});
      
        //Encriptar la contraseña
        const salt = bycrypjs.genSaltSync();
        medico.password= bycrypjs.hashSync(password, salt);

        //Guardar en BD
        await medico.save();
        res.json({
            medico
        });
    }catch(error){
        console.log(error);
        return res.status(500).json({
            msg: 'Ocurrió un error favor de comunicarse con soporte'
        })
    }
}
const medicoDelete = async(req, res) => {

    const {id} = req.body;
    //promesa
    // Medicos.destroy({where:{idMedico:id}}).then(medico =>{
    //     res.json(medico);
    // })
    // .catch((err) =>{
    //     console.log(err + 'error');
    //     res.status(500).json({
    //         errores: err
    //     })
    // });
    //await
    try{
        const medico = await Medicos.destroy({where:{idMedico:id}})
        res.json({
            medico
        });

    }catch(error){
        console.log(error);
        return res.status(500).json({
            msg: 'Ocurrió un error favor de comunicarse con soporte'
        })
    }
}

  const medicoActivo = async(req, res) => {
    const {id,activo} = req.body;

    try{
        const medico = await Medicos.update({ activo: activo }, {
            where: {
            idMedico: id
            }
        });

        res.json({
            medico
        })
    }catch(error){
        console.log(error);
        return res.status(500).json({
            msg: 'Ocurrió un error favor de comunicarse con soporte'
        });
    }

    // Medicos.update({ activo: activo }, {
    //     where: {
    //       idMedico: id
    //     }
    //   })
    // .then(medico =>{
    //     res.json(medico);
    // })
    // .catch((err) =>{
    //     console.log(err + 'error');
    //     res.status(500).json({
    //         errores: err
    //     })
    // });
  }


  const medicoPut = async(req, res) => {
    const {id, password,correo,fecha, ...resto} = req.body;
    try{
        const medico = await Medicos.update(resto, {
            where: {
            idMedico: id
            }
        });
        console.log(medico);
        res.json({
            medico
        });
    }catch(error){
        console.log(error);
        return res.status(500).json({
            msg: 'Ocurrió un error favor de comunicarse con soporte'
        });
    }
}




module.exports = {
    medicoGet,
    medicoPost,
    medicoDelete,
    medicoActivo,
    medicoPut,
    medicoIdGet
}