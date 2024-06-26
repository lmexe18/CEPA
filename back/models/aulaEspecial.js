'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AulaEspecial extends Model {
    static associate(models) {
      this.hasMany(models.AulaHorario, {
        foreignKey: 'idAula',
        as: 'horarios'
      });
    }
  }
  AulaEspecial.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    nombre: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'AulaEspecial',
    tableName: 'aulas_especiales'
  });
  return AulaEspecial;
};