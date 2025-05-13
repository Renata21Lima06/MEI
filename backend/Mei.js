// backend/Mei.js
import { DataTypes } from 'sequelize';
import sequelize from './config/sequelize.js';  // Caminho correto para o arquivo sequelize.js

const Mei = sequelize.define('Mei', {
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  // Outros campos podem ser adicionados aqui conforme necessário
});

// Exportação do modelo como default
export default Mei;
