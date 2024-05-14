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
    idUsuario: DataTypes.INTEGER,
    idDepartamento: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'DepartamentoUsuario',
    tableName: 'departamentos_usuarios'
  });
  return DepartamentoUsuario;
};