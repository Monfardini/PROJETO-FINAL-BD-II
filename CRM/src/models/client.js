const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Cliente = sequelize.define('Cliente', {
  cliente_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nome: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING(100),
    unique: true,
    allowNull: false,
    validate: {
      isEmail: true,
    },
  },
  telefone: {
    type: DataTypes.STRING(15),
    allowNull: false,
  },
  endereco: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  data_cadastro: {
    type: DataTypes.DATEONLY,
    defaultValue: DataTypes.NOW,
  },
}, {
  tableName: 'Cliente',
  timestamps: false,
});

module.exports = Cliente;
