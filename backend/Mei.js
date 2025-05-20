// models/MEI.js
import { DataTypes } from "sequelize";
import sequelize from "./config/sequelize.js";

const MEI = sequelize.define("MEI", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nome: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING(100),
    allowNull: false,
    // unique: true,
  },
  senha: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
});

export default MEI;
