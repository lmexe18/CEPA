'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Asignatura extends Model {

    static associate(models) {

      // Una asignatura tiene muchos temarios
      Asignatura.hasMany(models.Temario, {
        foreignKey: 'idTemario',
        as: 'asignaturaTemario'
      });

      // Una asignatura tiene muchos grupos
      Asignatura.belongsToMany(models.Curso, {
        through: models.AsignaturaProfeCurso,
        foreignKey: 'idCurso',
        as: 'asignaturaCurso'
      });

      
    }
  }
  Asignatura.init({
    nombre: DataTypes.STRING,
    idCurso: DataTypes.INTEGER,
    activo: DataTypes.BOOLEAN,
  }, {
    sequelize,
    modelName: 'Asignatura',
    tableName: 'asignaturas'
  });
  return Asignatura;
};