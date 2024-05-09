'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DepartamentoUsuario extends Model {
    static associate(models) {
    }
  }
  DepartamentoUsuario.init({
    usuarioId: DataTypes.INTEGER,
    departamentoId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: process.env.MODEL_USER_DEPA,
    tableName: process.env.TABLA_USERS_DEPA
  });
  return DepartamentoUsuario;
};