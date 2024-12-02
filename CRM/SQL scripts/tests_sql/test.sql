//atualizar estoque do produto
UPDATE Produto
SET estoque = estoque - 1
WHERE produto_id = 1;

//remover cliente
DELETE FROM Cliente
WHERE cliente_id = 2;

//TESTES DE UNIDADE ---------------------
//Insersao de dados valida
INSERT INTO Cliente (nome, email, telefone, endereco, data_cadastro) VALUES 
('João Santos', 'joao@gmail.com', '99999-1111', 'Rua A, 123', '2024-12-01');

//consulta de dados especificos
SELECT * FROM Cliente WHERE email = 'joao@gmail.com';


// TESTE DE INTEGRACAO -----------------
//relaciona cliente e venda
SELECT c.nome, v.data, v.valor
FROM Cliente c
JOIN Venda v ON c.cliente_id = v.cliente_id
WHERE c.nome = 'Maria Silva';


// TESTE FUNCIONAL -------------------
SELECT * FROM Produto WHERE estoque < 10;


// TESTE DE FUMACA ------------------
SELECT COUNT(*) FROM Venda;