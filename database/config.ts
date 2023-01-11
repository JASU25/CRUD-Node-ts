import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const db = new Sequelize(process.env.DB || '', process.env.USERDB || '', process.env.PASSDB || '',{
    host: process.env.host,
    dialect: 'mysql',
});

export default db;