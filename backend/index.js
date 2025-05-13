const express = require('express');
const app = express();
const cors = require('cors');

const sequelize = require('./config/sequelize'); // ✅ Apenas uma vez aqui
const MEI = require('./models/MEI');
const Contador = require('./models/Contador');
const cadastroRoutes = require('./routes/cadastro.routes');

app.use(cors());
app.use(express.json());
app.use('/', cadastroRoutes);

// ✅ Criação/atualização das tabelas
sequelize.sync({ alter: true })
    .then(() => {
        console.log('Tabelas sincronizadas com o banco de dados.');
        app.listen(3000, () => {
            console.log('Servidor rodando na porta 3000');
        });
    })
    .catch(erro => {
        console.error('Erro ao sincronizar tabelas:', erro);
    });
