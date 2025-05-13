
import { DataTypes } from 'sequelize';
import sequelize from './config/sequelize.js';

const Mei = sequelize.define('Mei', {
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },

});

export default Mei;
