'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TipoAula extends Model {

    static associate(models) {
      
    }
  }
  TipoAula.init({
    nombre: DataTypes.STRING,
    activo: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'TipoAula',
    tableName: 'tipos_aulas'
  });
  return TipoAula;
};