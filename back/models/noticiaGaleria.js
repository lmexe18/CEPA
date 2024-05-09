'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class NoticiaGaleria extends Model {
    static associate(models) {
      this.hasMany(models.Noticia, { 
        foreignKey: 'id', 
        as: 'noticia'
      });
    }
  }
  NoticiaGaleria.init({
    idNoticia: DataTypes.INTEGER,
    foto: DataTypes.STRING
  }, {
    sequelize,
    modelName: process.env.MODEL_NOTICIA_GALERIA,
    tableName: process.env.TABLA_NOTICIAS_GALERIAS
  });
  return NoticiaGaleria;
};