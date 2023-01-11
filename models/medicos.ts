import  {Model,DataTypes} from 'sequelize'
import sequelize from '../database/config';

class Medicos extends Model{}
Medicos.init({
  idMedico: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  nombres: DataTypes.STRING,
  apellidos: DataTypes.STRING,
  correo: {
    type: DataTypes.STRING,
    unique: true
  },
  password: DataTypes.STRING,
  sexo: DataTypes.CHAR,
  activo: DataTypes.BOOLEAN,
  cedula: DataTypes.STRING,
  especialidad: DataTypes.STRING,
  fechaAlta: DataTypes.DATE
}, {
  sequelize,
  timestamps: false,
  modelName: 'medicos',
});

Medicos.sync({
  alter: false,
  force: false
})

export default  Medicos;