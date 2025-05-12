// db.js
const { Sequelize } = require('sequelize');

// Cria a instância do Sequelize com as credenciais do seu banco MySQL
const sequelize = new Sequelize('mei_i_help_you', 'root', 'Bruna@123', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;
