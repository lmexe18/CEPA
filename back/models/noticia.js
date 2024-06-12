'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {

  class Noticia extends Model {

    static associate(models) {
      this.belongsTo(models.Categoria, {
        foreignKey: 'idCategoria',
        as: 'categoria'
      });
      this.hasMany(models.Seccion, {
        foreignKey: 'idNoticia',
        as: 'secciones'
      });
    }
  }
  Noticia.init({
    titulo: DataTypes.STRING,
    enlace: DataTypes.STRING,
    idCategoria: DataTypes.STRING,
    foto: DataTypes.STRING,
    publicada: DataTypes.BOOLEAN,
    tipo: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Noticia',
    tableName: 'noticias'
  });
  return Noticia;
};
/**
 * Tipos de noticias:
 * 'Erasmus'
  'La voz del mes'
  'Convocatorias'
  'Notas de prensa'
 */