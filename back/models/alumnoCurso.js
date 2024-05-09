'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class alumnoCurso extends Model {

    static associate(models) {
    }
  }
  AlumnoCurso.init({
    idUsuario: DataTypes.NUMBER, 
    idCurso: DataTypes.NUMBER
  }, {
    sequelize,
    modelName: process.env.MODEL_ALUMNO_CURSO,
    tableName: process.env.TABLA_ALUMNOS_CURSOS
  });
  return AlumnoCurso;
};