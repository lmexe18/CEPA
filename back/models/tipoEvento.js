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
    nombre: DataTypes.STRING,
    activo: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'TipoEvento',
    tableName: 'tipos_eventos'
  });
  return TipoEvento
};