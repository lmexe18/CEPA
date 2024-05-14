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
    enlace: DataTypes.STRING,
    idTipoEvento: DataTypes.STRING,
    foto: DataTypes.STRING,
    visibilidad: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Noticia',
    tableName: 'noticias'
  });
  return Noticia;
};