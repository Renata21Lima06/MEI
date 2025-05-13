// models/MEI.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize'); // ajuste conforme seu caminho

const MEI = sequelize.define('MEI', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    telefone: {
        type: DataTypes.STRING,
        allowNull: false
    },
    empresa: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    cnpj: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    endereco: {
        type: DataTypes.STRING,
        allowNull: false
    },
    senha: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = MEI;
