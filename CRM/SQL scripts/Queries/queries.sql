// ver todos os clientes, vendedores e produtos
SELECT * FROM Cliente;
SELECT * FROM Vendedor;
SELECT * FROM Produto;

// ver vendas e seus clientes
SELECT v.venda_id, v.data, v.valor, c.nome AS cliente, ve.nome AS vendedor
FROM Venda v
JOIN Cliente c ON v.cliente_id = c.cliente_id
JOIN Vendedor ve ON v.vendedor_id = ve.vendedor_id;

// ver itens vendidos com seus produtos
SELECT iv.item_id, iv.quantidade, p.nome AS produto, v.data AS data_venda
FROM ItemVenda iv
JOIN Produto p ON iv.produto_id = p.produto_id
JOIN Venda v ON iv.venda_id = v.venda_id;


//ver interacao com clientes
SELECT i.interacao_id, i.data, i.tipo_interacao, i.descricao, c.nome AS cliente
FROM Interacao i
JOIN Cliente c ON i.cliente_id = c.cliente_id;
