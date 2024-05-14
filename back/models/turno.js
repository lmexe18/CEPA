'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Turno extends Model {
    static associate(models) {
    }
  }
  Turno.init({
    nombre: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Turno',
    tableName: 'turnos'
  });
  return Turno;
};
