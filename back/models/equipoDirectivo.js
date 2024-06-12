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
    modelName: 'EquipoDirectivo',
    tableName: 'equipos_directivos'
  });
  return EquipoDirectivo;
};