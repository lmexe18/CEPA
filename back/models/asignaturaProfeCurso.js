'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AsignaturaProfeCurso extends Model {

    static associate(models) {
    }
  }
  AsignaturaProfeCurso.init({
    idAsignatura: DataTypes.INTEGER,
    idUsuario: DataTypes.INTEGER,
    idCurso: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'AsignaturaProfeCurso',
    tableName: 'asignaturas_profes_cursos'
  });
  return AsignaturaProfeCurso;
};