const express = require('express');
const sequelize = require('./config/database');
const clienteRoutes = require('./routes/clienteRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Rotas
app.use('/clientes', clienteRoutes);

// Inicializar banco e servidor
(async () => {
  try {
    await sequelize.authenticate();
    console.log('Conexão com o banco estabelecida com sucesso.');
    await sequelize.sync(); // Cria as tabelas, se necessário
    app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
  } catch (error) {
    console.error('Erro ao conectar com o banco:', error);
  }
})();

//
const express = require('express');
const path = require('path');

// Servindo arquivos estáticos da pasta public
app.use(express.static(path.join(__dirname, '../public')));
