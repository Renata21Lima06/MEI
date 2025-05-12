const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('mei_i_help_you', 'root', 'Bruna@123', {
  host: 'localhost',
  dialect: 'mysql'
});

async function connectDB() {
  try {
    await sequelize.authenticate();
    console.log('Conectado ao MySQL com Sequelize!');
  } catch (error) {
    console.error('Erro ao conectar com o Sequelize:', error);
  }
}

connectDB();

module.exports = sequelize;


const Mei = require('./Mei');
const Contador = require('./Contador');
const Servico = require('./Servico');
const Proposta = require('./Proposta');
const Mensagem = require('./Mensagem');

// Relações
Mei.hasMany(Servico, { foreignKey: 'mei_id' });
Servico.belongsTo(Mei, { foreignKey: 'mei_id' });

Contador.hasMany(Proposta, { foreignKey: 'contador_id' });
Proposta.belongsTo(Contador, { foreignKey: 'contador_id' });

Servico.hasMany(Proposta, { foreignKey: 'servico_id' });
Proposta.belongsTo(Servico, { foreignKey: 'servico_id' });

Servico.hasMany(Mensagem, { foreignKey: 'servico_id' });
Mensagem.belongsTo(Servico, { foreignKey: 'servico_id' });

const express = require('express');
const app = express();
const port = 3000;

const rotas = require('./rotas');

// Middleware para interpretar JSON
app.use(express.json());

// Usa as rotas definidas no arquivo rotas.js
app.use(rotas);

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});



sequelize.sync({ alter: true }) // ou { force: false } para evitar apagar
  .then(() => console.log('Modelos sincronizados com o banco!'))
  .catch((err) => console.error('Erro ao sincronizar:', err));
