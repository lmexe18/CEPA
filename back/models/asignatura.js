'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Asignatura extends Model {

    static associate(models) {
      // Una asignatura pertenece a un departamento
      Asignatura.belongsTo(models.Departamento, {
        foreignKey: process.env.ID_DEPARTAMENTO,
        as: 'asignaturaDepartamento'
      });

      // Una asignatura tiene muchos temarios
      Asignatura.hasMany(models.Temario, {
        foreignKey: process.env.ID_ASIGNATURA,
        as: 'asignaturaTemario'
      });

      // Una asignatura tiene muchos grupos
      Asignatura.belongsToMany(models.Curso, {
        through: models.AsignaturaProfeCurso,
        foreignKey: process.env.ID_ASIGNATURA,
        as: 'asignaturaCurso'
      });

      // Una asignatura tiene muchos profesores
      
    }
  }
  Asignatura.init({
    nombre: DataTypes.STRING,
    idDepartamento: DataTypes.INTEGER,
    activo: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: process.env.MODEL_ASIGNATURA,
    tableName: process.env.TABLA_ASIGNATURAS
  });
  return Asignatura;
};