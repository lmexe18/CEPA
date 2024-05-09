'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TipoEvento extends Model {
    static associate(models) {
    }
  }
  TipoEvento.init({
    nombre: DataTypes.STRING
  }, {
    sequelize,
    modelName: process.env.MODEL_TIPO_EVENTO,
    tableName: process.env.TABLA_TIPOS_EVENTOS
  });
  return TipoEvento
};