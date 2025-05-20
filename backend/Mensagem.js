const { DataTypes } = require("sequelize");
const sequelize = require("./index");

const Mensagem = sequelize.define("Mensagem", {
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  senha: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Mensagem;
