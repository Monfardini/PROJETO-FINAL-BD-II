const Cliente = require('../models/Cliente');

const ClienteController = {
  async listar(req, res) {
    try {
      const clientes = await Cliente.findAll();
      res.status(200).json(clientes);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao listar clientes' });
    }
  },
  
  async criar(req, res) {
    try {
      const novoCliente = await Cliente.create(req.body);
      res.status(201).json(novoCliente);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao criar cliente' });
    }
  },
  
  async atualizar(req, res) {
    try {
      const { id } = req.params;
      await Cliente.update(req.body, { where: { cliente_id: id } });
      res.status(200).json({ message: 'Cliente atualizado com sucesso' });
    } catch (error) {
      res.status(500).json({ error: 'Erro ao atualizar cliente' });
    }
  },
  
  async deletar(req, res) {
    try {
      const { id } = req.params;
      await Cliente.destroy({ where: { cliente_id: id } });
      res.status(200).json({ message: 'Cliente removido com sucesso' });
    } catch (error) {
      res.status(500).json({ error: 'Erro ao deletar cliente' });
    }
  },
};

module.exports = ClienteController;
