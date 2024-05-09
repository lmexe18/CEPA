/** Links de documentos referentes al centro */
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DocumentoProgramatico extends Model {
    static associate(models) {
    }
  }
  DocumentoProgramatico.init({
    nombre: DataTypes.STRING,
    link: DataTypes.STRING,
    tipo: DataTypes.STRING,
    activo: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: process.env.MODEL_DOCUMENTO_PROGRAMATICO,
    tableName: process.env.TABLA_DOCUMENTOS_PROGRAMATICOS
  });
  return DocumentoProgramatico;
};