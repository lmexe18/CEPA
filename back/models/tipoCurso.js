'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TipoCurso extends Model {
    static associate(models) {
      // Un tipo de curso tiene muchos cursos
      this.hasMany(models.Curso, {
        foreignKey: 'tipoCursoId',
        as: 'tipoCurso'
      });
    }
  }
  TipoCurso.init({
    nombre: DataTypes.STRING,
    activo: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: process.env.MODEL_TIPO_CURSO,
    tableName: process.env.TABLA_TIPOS_CURSOS
  });
  return TipoCurso;
};