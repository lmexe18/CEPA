'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Asignatura extends Model {

    static associate(models) {
      // Una asignatura pertenece a un departamento
      Asignatura.belongsTo(models.Departamento, {
        foreignKey: 'idDepartamento',
        as: 'asignaturaDepartamento'
      });

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

      // Una asignatura tiene muchos profesores
      Asignatura.hasMany(models.Usuario, {
        through: models.AsignaturaProfeCurso,
        foreignKey: 'idUsuario',
        as: 'profeCurso'
      })
    }
  }
  Asignatura.init({
    nombre: DataTypes.STRING,
    idDepartamento: DataTypes.INTEGER,
    activo: DataTypes.BOOLEAN,
  }, {
    sequelize,
    modelName: 'Asignatura',
    tableName: 'asignaturas'
  });
  return Asignatura;
};