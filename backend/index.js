// backend/index.js
import express from 'express';
import sequelize from './config/sequelize.js'; // Agora com a extensão '.js'
import Mei from './mei.js'; // Certifique-se de incluir a extensão '.js' também

const app = express();
app.use(express.json());

sequelize.sync({ alter: true }).then(() => {
  console.log('Banco de dados sincronizado!');
});

// Rotas para CRUD de MEI
app.get('/meis', async (req, res) => {
  try {
    const meis = await Mei.findAll();
    res.json(meis);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao buscar MEIs' });
  }
});

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
