
-- Criação do banco de dados
CREATE DATABASE IF NOT EXISTS mei_i_help_you;
USE mei_i_help_you;

-- Tabela de usuários MEI
CREATE TABLE MEI (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    senha VARCHAR(255) NOT NULL
);

-- Tabela de contadores
CREATE TABLE Contador (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    senha VARCHAR(255) NOT NULL,
    validado BOOLEAN DEFAULT FALSE
);

-- Tabela de serviços solicitados por MEIs
CREATE TABLE Servico (
    id INT AUTO_INCREMENT PRIMARY KEY,
    mei_id INT NOT NULL,
    descricao TEXT NOT NULL,
    status ENUM('pendente', 'em andamento', 'concluido', 'cancelado') DEFAULT 'pendente',
    data_solicitacao DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (mei_id) REFERENCES MEI(id)
);

-- Propostas enviadas pelos contadores para um serviço
CREATE TABLE Proposta (
    id INT AUTO_INCREMENT PRIMARY KEY,
    servico_id INT NOT NULL,
    contador_id INT NOT NULL,
    mensagem TEXT NOT NULL,
    aceita BOOLEAN DEFAULT NULL,
    data_proposta DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (servico_id) REFERENCES Servico(id),
    FOREIGN KEY (contador_id) REFERENCES Contador(id)
);

-- Tabela de mensagens entre MEI e Contador
CREATE TABLE Mensagem (
    id INT AUTO_INCREMENT PRIMARY KEY,
    servico_id INT NOT NULL,
    remetente ENUM('MEI', 'Contador') NOT NULL,
    texto TEXT NOT NULL,
    data_envio DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (servico_id) REFERENCES Servico(id)
);
