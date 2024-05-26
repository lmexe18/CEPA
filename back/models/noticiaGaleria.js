'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class NoticiaGaleria extends Model {
    static associate(models) {
      this.hasMany(models.Noticia, { 
        foreignKey: 'idNoticia', 
        as: 'noticia'
      });
    }
  }
  NoticiaGaleria.init({
    idNoticia: DataTypes.INTEGER,
    foto: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'NoticiaGaleria',
    tableName: 'noticias_galerias'
  });
  return NoticiaGaleria;
};