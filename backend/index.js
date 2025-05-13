const express = require('express');
const sequelize = require('./db');
const Mei = require('./Mei');

const app = express();
app.use(express.json());

sequelize.sync().then(() => {
  console.log('Banco de dados sincronizado!');
});

// 📌 Listar todos os MEIs
app.get('/meis', async (req, res) => {
  try {
    const meis = await Mei.findAll();
    res.json(meis);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao buscar MEIs' });
  }
});

// 📌 Buscar um MEI por ID
app.get('/meis/:id', async (req, res) => {
  try {
    const mei = await Mei.findByPk(req.params.id);
    if (mei) {
      res.json(mei);
    } else {
      res.status(404).json({ error: 'MEI não encontrado' });
    }
  } catch (err) {
    res.status(500).json({ error: 'Erro ao buscar MEI' });
  }
});

// 📌 Criar novo MEI
app.post('/meis', async (req, res) => {
  try {
    const { nome } = req.body;
    const novoMei = await Mei.create({ nome });
    res.status(201).json(novoMei);
  } catch (err) {
    res.status(500).json({ error: 'Erro ao criar MEI' });
  }
});

// 📌 Atualizar MEI por ID
app.put('/meis/:id', async (req, res) => {
  try {
    const { nome } = req.body;
    const mei = await Mei.findByPk(req.params.id);
    if (mei) {
      mei.nome = nome;
      await mei.save();
      res.json(mei);
    } else {
      res.status(404).json({ error: 'MEI não encontrado' });
    }
  } catch (err) {
    res.status(500).json({ error: 'Erro ao atualizar MEI' });
  }
});

// 📌 Deletar MEI por ID
app.delete('/meis/:id', async (req, res) => {
  try {
    const mei = await Mei.findByPk(req.params.id);
    if (mei) {
      await mei.destroy();
      res.json({ mensagem: 'MEI removido com sucesso' });
    } else {
      res.status(404).json({ error: 'MEI não encontrado' });
    }
  } catch (err) {
    res.status(500).json({ error: 'Erro ao deletar MEI' });
  }
});

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});
