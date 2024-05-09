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
    nombre: DataTypes.STRING
  }, {
    sequelize,
    modelName: process.env.MODEL_TIPO_NOTICIA,
    tableName: process.env.TABLA_TIPOS_NOTICIAS
  });
  return TipoNoticia;
};