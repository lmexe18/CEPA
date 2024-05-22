'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Curso extends Model {
    static associate(models) {  

      // Un curso pertenece a un tipo de curso
      Curso.belongsTo(models.TipoCrupo, {
        foreignKey: 'id',
        as: 'cursoTipoCursos'
      });

      // Un curso tiene solo un tutor
      Curso.belongsTo(models.Usuario, {
        foreignKey: 'id',
        as: 'cursoTutor'
      });

      // Un curso tiene muchas asignaturas
      Curso.belongsToMany(models.Asignatura, {
        through: models.asignaturaCurso,
        foreignKey: id,
        as: 'cursoAsignatura'
      });

      // Un curso tiene muchos profesores
      Curso.belongsToMany(models.Usuario, {
        through: models.asignaturasCursos,
        foreignKey: process.env.ID_CURSO,
        as: 'cursoProfesor'
      });

    }
    }
    Curso.init({
    numeroCurso: DataTypes.INTEGER,
    idHorario: DataTypes.STRING,
    idTipoGrupo: DataTypes.INTEGER,
    idTutor: DataTypes.INTEGER,
    activo: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Curso',
    tableName: 'cursos'
  });
  return Grupo;
};