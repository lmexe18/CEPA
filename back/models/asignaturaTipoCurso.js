'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AsignaturaTipoCurso extends Model {

    static associate(models) {
    }
  }
  AsignaturaTipoCurso.init({
    idTipoCurso: DataTypes.INTEGER,
    idAsignatura: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'AsignaturaTipoCurso',
    tableName: 'asignaturas_tipos_cursos'
  });
  return AsignaturaTipoCurso;
};