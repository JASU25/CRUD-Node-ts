const Medico = require('../models/medicos')


const existeMedicoPorId = async( id ) => {
    const existeMedico = await Medico.findByPk(id);
    if ( !existeMedico ) {
        throw new Error(`El id no existe ${ id }`);
    }
}

  module.exports = {
    existeMedicoPorId
  }