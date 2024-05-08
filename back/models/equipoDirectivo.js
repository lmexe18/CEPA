'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class equipoDirectivo extends Model {
    static associate(models) {
    }
  }
  equipoDirectivo.init({
    puesto: DataTypes.STRING,
    nombre: DataTypes.STRING,
    email: DataTypes.STRING
  }, {
    sequelize,
    modelName: process.env.MODEL_EQUIPO_DIRECTIVO,
    tableName: process.env.TABLA_EQUIPOS_DIRECTIVOS
  });
  return equipoDirectivo;
};