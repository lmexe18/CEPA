'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class asignatura extends Model {

    static associate(models) {
      // Una asignatura pertenece a un departamento
      asignatura.belongsTo(models.departamento, {
        foreignKey: process.env.ID_DEPARTAMENTO,
        as: 'asignaturaDepartamento'
      });

      // Una asignatura tiene muchos temarios
      asignatura.hasMany(models.temario, {
        foreignKey: process.env.ID_ASIGNATURA,
        as: 'asignaturaTemario'
      });

      // Una asignatura tiene muchos grupos
      asignatura.belongsToMany(models.grupo, {
        through: models.asignaturaGrupo,
        foreignKey: process.env.ID_ASIGNATURA,
        as: 'asignaturaGrupo'
      });

      // Una asignatura tiene muchos profesores
      asignatura.belongsToMany(models.usuario, {
        through: models.asignaturaGrupo,
        foreignKey: process.env.ID_ASIGNATURA,
        as: 'asignaturaProfesor'
      });
    }
  }
  asignatura.init({
    nombre: DataTypes.STRING,
    idDepartamento: DataTypes.INTEGER,
    activo: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: process.env.MODEL_ASIGNATURA,
    tableName: process.env.TABLA_ASIGNATURAS
  });
  return asignatura;
};