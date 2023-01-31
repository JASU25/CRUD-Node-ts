"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const config_1 = __importDefault(require("../database/config"));
const especialidades_1 = __importDefault(require("./especialidades"));
class Medicos extends sequelize_1.Model {
}
Medicos.init({
    idMedico: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nombres: sequelize_1.DataTypes.STRING,
    apellidos: sequelize_1.DataTypes.STRING,
    correo: {
        type: sequelize_1.DataTypes.STRING,
        unique: true
    },
    password: sequelize_1.DataTypes.STRING,
    sexo: sequelize_1.DataTypes.CHAR,
    activo: sequelize_1.DataTypes.BOOLEAN,
    cedula: sequelize_1.DataTypes.STRING,
    idEspecialidad: sequelize_1.DataTypes.INTEGER,
    fechaAlta: sequelize_1.DataTypes.DATE
}, {
    sequelize: config_1.default,
    timestamps: false,
    modelName: 'medicos',
});
Medicos.belongsTo(especialidades_1.default, { foreignKey: 'idEspecialidad' });
Medicos.sync({
    alter: false,
    force: false
});
exports.default = Medicos;
//# sourceMappingURL=medicos.js.map