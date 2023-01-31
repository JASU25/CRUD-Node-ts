"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const config_1 = __importDefault(require("../database/config"));
class Especialidades extends sequelize_1.Model {
}
Especialidades.init({
    idEspecialidad: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nombreEspecialidad: sequelize_1.DataTypes.STRING,
}, {
    sequelize: config_1.default,
    timestamps: false,
    modelName: 'especialidades',
});
Especialidades.sync({
    alter: false,
    force: false
});
exports.default = Especialidades;
//# sourceMappingURL=especialidades.js.map