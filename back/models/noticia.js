'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Noticia extends Model {
   
    static associate(models) {
      this.belongsTo(models.TipoNoticia, {
        foreignKey: 'idTipoNoticia',
        as: 'tipoNoticia'
      });
    }
  }
  Noticia.init({
    titulo: DataTypes.STRING,
    noticia: DataTypes.STRING,
    enlace: DataTypes.STRING,
    foto: DataTypes.STRING,
    visibilidad: DataTypes.BOOLEAN,
    idTipoNoticia: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Noticia',
    tableName: 'noticias'
  });
  return Noticia;
};