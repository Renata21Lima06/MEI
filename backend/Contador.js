import { DataTypes } from "sequelize";
import sequelize from "./config/sequelize.js";

const Contador = sequelize.define("Contador", {
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

export default Contador;
