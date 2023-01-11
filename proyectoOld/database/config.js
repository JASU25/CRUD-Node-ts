const Sequelize = require('sequelize');
 
const db = new Sequelize('consultorio', process.env.USERDB, process.env.PASSDB,{
    host: process.env.host,
    dialect: 'mysql',
});

module.exports = db;