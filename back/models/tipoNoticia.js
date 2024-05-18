'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TipoNoticia extends Model {
    static associate(models) {
    }
  }
  TipoNoticia.init({
    nombre: DataTypes.STRING,
    activo: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'TipoNoticia',
    tableName: 'tipos_noticias'
  });
  return TipoNoticia;
};