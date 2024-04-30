'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class asignaturaProfeCurso extends Model {

    static associate(models) {
    }
  }
  asignaturaProfeCurso.init({
    idAsignatura: DataTypes.INTEGER,
    idUsuario: DataTypes.INTEGER,
    idCurso: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: process.env.MODEL_ASIGNATURA_PROFE_CURSO,
    tableName: process.env.TABLA_ASIGNATURAS_PROFES_CURSOS
  });
  return asignaturaProfeCurso;
};