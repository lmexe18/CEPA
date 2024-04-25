'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class curso extends Model {
    static associate(models) {  

      // Un curso pertenece a un tipo de curso
      curso.belongsTo(models.tipoCrupo, {
        foreignKey: process.env.ID_TIPO_CURSO,
        as: 'cursoTipoCursos'
      });

      // Un curso tiene solo un tutor
      curso.belongsTo(models.usuario, {
        foreignKey: process.env.ID_USUARIO,
        as: 'cursoTutor'
      });

      // Un curso tiene muchas asignaturas
      curso.belongsToMany(models.asignatura, {
        through: models.asignaturaCurso,
        foreignKey: process.env.ID_CURSO,
        as: 'cursoAsignatura'
      });

      // Un curso tiene muchos profesores
      curso.belongsToMany(models.Usuario, {
        through: models.asignaturaCurso,
        foreignKey: process.env.ID_CURSO,
        as: 'cursoProfesor'
      });

      // Un curso tiene alumnos

    }
  }
  curso.init({
    numeroCurso: DataTypes.INTEGER,
    idTurno: DataTypes.INTEGER,
    horario: DataTypes.STRING, // Es un link de drive que contiene el horario, el tutor y la clase
    idTipoCurso: DataTypes.INTEGER,
    idTutor: DataTypes.INTEGER,
    activo: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: process.env.MODEL_CURSO,
    tableName: process.env.TABLA_CURSOS
  });
  return curso;
};