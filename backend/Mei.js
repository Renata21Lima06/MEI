// Mei.js
const { DataTypes } = require('sequelize');
const sequelize = require('./db');

// Define o modelo "MEI"
const Mei = sequelize.define('MEI', {
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  // adicione outros campos conforme necessário
});

module.exports = Mei;
