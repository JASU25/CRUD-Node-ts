import  {Model,DataTypes} from 'sequelize'
import sequelize from '../database/config';


class Especialidades extends Model{}
Especialidades.init({
  idEspecialidad: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  nombreEspecialidad: DataTypes.STRING,
}, {
  sequelize,
  timestamps: false,
  modelName: 'especialidades',
});

Especialidades.sync({
  alter: false,
  force: false
})

export default  Especialidades;