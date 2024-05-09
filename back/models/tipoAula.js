'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TipoAula extends Model {

    static associate(models) {
      this.hasMany(models.Aula, {
        foreignKey: 'tipoId',
        as: 'aulas'
      });
    }
  }
  TipoAula.init({
    nombre: DataTypes.STRING,
    activo: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: process.env.MODEL_TIPO_AULA,
    tableName: process.env.TABLA_TIPOS_AULAS
  });
  return TipoAula;
};