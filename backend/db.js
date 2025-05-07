//<- Aqui ficará a conexão com o MySQL

const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',         // ou seu usuário
  password: '',         // sua senha
  database: 'mei_help'  // nome do seu banco
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Conectado ao MySQL!');
});

module.exports = connection;
