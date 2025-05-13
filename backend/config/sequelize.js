// backend/config/sequelize.js
import { Sequelize } from 'sequelize';

// Configuração do Sequelize para conectar ao banco de dados
const sequelize = new Sequelize('mei_i_help_you', 'root', 'admin', {
  host: 'localhost',  // Substitua pelo seu host, caso não seja 'localhost'
  dialect: 'mysql',   // Se estiver usando outro banco de dados, como PostgreSQL ou SQLite, altere para 'postgres' ou 'sqlite'
});

// Teste de conexão com o banco
try {
  await sequelize.authenticate();
  console.log('Conexão com o banco de dados bem-sucedida!');
} catch (error) {
  console.error('Erro de conexão com o banco de dados:', error);
}

export default sequelize;
