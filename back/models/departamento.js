'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Departamento extends Model {

    static associate(models) {

    }
  }
  Departamento.init({
    nombre: DataTypes.STRING,
    descripcion: DataTypes.STRING,
    foto: DataTypes.STRING,
    jefeDepartamento: DataTypes.STRING,
    activo: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Departamento',
    tableName: 'departamentos'
  });
  return Departamento;
};