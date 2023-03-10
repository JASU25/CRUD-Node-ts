import  {Model,DataTypes} from 'sequelize'
import sequelize from '../database/config';
import Especialidades from './especialidades';

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
  idEspecialidad: DataTypes.INTEGER,
  fechaAlta: DataTypes.DATE
}, {
  sequelize,
  timestamps: false,
  modelName: 'medicos',
});
Medicos.belongsTo(Especialidades, {foreignKey: 'idEspecialidad'});

Medicos.sync({
  alter: false,
  force: false
});


export default  Medicos;