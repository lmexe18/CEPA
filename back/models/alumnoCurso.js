'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AlumnoCurso extends Model {

    static associate(models) {
    }
  }
  AlumnoCurso.init({
    idUsuario: DataTypes.NUMBER, 
    idCurso: DataTypes.NUMBER,
    activo: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'AlumnoCurso',
    tableName: 'alumnos_cursos'
  });
  return AlumnoCurso;
};