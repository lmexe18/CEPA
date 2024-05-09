'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class EquipoDirectivo extends Model {
    static associate(models) {
    }
  }
  EquipoDirectivo.init({
    puesto: DataTypes.STRING,
    nombre: DataTypes.STRING,
    email: DataTypes.STRING
  }, {
    sequelize,
    modelName: process.env.MODEL_EQUIPO_DIRECTIVO,
    tableName: process.env.TABLA_EQUIPOS_DIRECTIVOS
  });
  return EquipoDirectivo;
};