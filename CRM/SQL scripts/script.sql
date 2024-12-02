SHOW DATABASES;
CREATE DATABASE CRM;
USE CRM;
CREATE TABLE Cliente (
    cliente_id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100),
    email VARCHAR(100) UNIQUE,
    telefone VARCHAR(15),
    endereco VARCHAR(255),
    data_cadastro DATE
);

CREATE TABLE Vendedor (
    vendedor_id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100),
    email VARCHAR(100) UNIQUE,
    telefone VARCHAR(15)
);

CREATE TABLE Produto (
    produto_id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100),
    descricao TEXT,
    preco DECIMAL(10, 2),
    estoque INT
);

CREATE TABLE Venda (
    venda_id INT PRIMARY KEY AUTO_INCREMENT,
    data DATE,
    valor DECIMAL(10, 2),
    status VARCHAR(20),
    cliente_id INT,
    vendedor_id INT,
    FOREIGN KEY (cliente_id) REFERENCES Cliente(cliente_id),
    FOREIGN KEY (vendedor_id) REFERENCES Vendedor(vendedor_id)
);

CREATE TABLE ItemVenda (
    item_id INT PRIMARY KEY AUTO_INCREMENT,
    venda_id INT,
    produto_id INT,
    quantidade INT,
    FOREIGN KEY (venda_id) REFERENCES Venda(venda_id),
    FOREIGN KEY (produto_id) REFERENCES Produto(produto_id)
);

CREATE TABLE Interacao (
    interacao_id INT PRIMARY KEY AUTO_INCREMENT,
    data DATE,
    tipo_interacao VARCHAR(50),
    descricao TEXT,
    cliente_id INT,
    FOREIGN KEY (cliente_id) REFERENCES Cliente(cliente_id)
);

//usuario com permissões controladas
CREATE USER 'crm_user'@'localhost' IDENTIFIED BY 'senha123';
GRANT SELECT, INSERT, UPDATE, DELETE ON CRM.* TO 'crm_user'@'localhost';
FLUSH PRIVILEGES;
