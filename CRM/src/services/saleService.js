const Venda = require('../models/Venda');

const calcularTotalVendasPorCliente = async (clienteId) => {
  const vendas = await Venda.findAll({ where: { cliente_id: clienteId } });
  return vendas.reduce((total, venda) => total + parseFloat(venda.valor), 0);
};

module.exports = {
  calcularTotalVendasPorCliente,
};
