// Importa o módulo 'mysql2', que permite se conectar e interagir com o MySQL usando Node.js
const mysql = require('mysql2');

// Cria a conexão com o banco de dados MySQL usando os dados de acesso
const connection = mysql.createConnection({
  host: 'localhost',     // Endereço do servidor do banco (localhost = seu próprio computador)
  user: 'root',          // Nome de usuário do MySQL
  password: 'Bruna@123',          // Senha do usuário (deixe vazio se não tiver definido uma)
  database: 'mei_i_help_you' // Nome do banco de dados que será usado
});

// Tenta estabelecer a conexão com o banco de dados
connection.connect(err => {
  if (err) {
    // Se ocorrer um erro ao tentar conectar, exibe uma mensagem de erro
    console.error('Erro ao conectar ao banco de dados:', err);
    return;
  }
  // Se conectar com sucesso, exibe uma mensagem de sucesso no terminal
  console.log('Conexão feita com sucesso!');
});
