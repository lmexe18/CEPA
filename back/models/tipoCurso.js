'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TipoCurso extends Model {
    static associate(models) {
      // Un tipo de curso tiene muchos cursos
      this.hasMany(models.Curso, {
        foreignKey: 'id',
        as: 'cursos'
      });
    }
  }
  TipoCurso.init({
    nombre: DataTypes.STRING,
    activo: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'TipoCurso',
    tableName: 'tipos_cursos'
  });
  return TipoCurso;
};