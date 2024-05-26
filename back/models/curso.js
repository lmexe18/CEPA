'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Curso extends Model {
    static associate(models) {  
      /*
      // Un curso pertenece a un tipo de curso
      Curso.belongsTo(models.TipoCurso, {
        foreignKey: 'idTipoCurso',
        as: 'tipoCurso'
      });

      // Un curso tiene solo un tutor
      Curso.belongsTo(models.Usuario, {
        foreignKey: 'idUsuario',
        as: 'tutor'
      });

      // Un curso tiene muchas asignaturas
      Curso.belongsToMany(models.Asignatura, {
        through: models.AsignaturaProfeCurso, // Modelo intermedio
        foreignKey: 'cursoId',
        otherKey: 'asignaturaId',
        as: 'cursoAsignatura'
      });

      // Un curso tiene muchos profesores
      Curso.belongsToMany(models.Usuario, {
        through: models.AsignaturaProfeCurso, // Modelo intermedio
        foreignKey: 'cursoId',
        otherKey: 'profesorId',
        as: 'cursoProfesor'
      });

      // Un curso tiene alumnos
      Curso.hasMany(models.Usuario, {
        foreignKey: 'cursoId',
        as: 'alumnoCurso'
      });*/
    }
  }
  Curso.init({
    numeroCurso: DataTypes.INTEGER,
    idTurno: DataTypes.INTEGER,
    horario: DataTypes.STRING, // Es un link de drive que contiene el horario, el tutor y la clase
    fechaInicio: DataTypes.DATE,
    fechaFin: DataTypes.DATE,
    idTipoCurso: DataTypes.INTEGER,
    idTutor: DataTypes.INTEGER,
    activo: DataTypes.BOOLEAN,
  }, {
    sequelize,
    modelName: 'Curso',
    tableName: 'cursos'
  });
  return Curso;
};