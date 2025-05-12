// index.js
const express = require('express');
const sequelize = require('./db');
const Mei = require('./Mei');

const app = express();
app.use(express.json());

// Sincroniza os modelos com o banco (cria a tabela se não existir)
sequelize.sync()
  .then(() => {
    console.log('Banco de dados sincronizado!');
  })
  .catch((err) => {
    console.error('Erro ao sincronizar o banco:', err);
  });

// Rota de exemplo
app.get('/', (req, res) => {
  res.send('API MEI funcionando!');
});

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
