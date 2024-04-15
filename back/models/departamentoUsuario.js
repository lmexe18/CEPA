'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class departamentoUsuario extends Model {
    static associate(models) {
    }
  }
  departamentoUsuario.init({
    usuarioId: DataTypes.INTEGER,
    departamentoId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: process.env.MODEL_DEPA_USER,
    tableName: process.env.TABLA_DEPA_USER
  });
  return UsuarioDepartamento;
};