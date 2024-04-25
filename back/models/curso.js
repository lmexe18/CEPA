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
        through: models.asignaturasCursos,
        foreignKey: process.env.ID_CURSO,
        as: 'cursoProfesor'
      });

    }
  }
  Grupo.init({
    numeroCurso: DataTypes.INTEGER,
    idHorario: DataTypes.STRING,
    idTipoGrupo: DataTypes.INTEGER,
    idTutor: DataTypes.INTEGER,
    activo: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Grupo',
    tableName: 'grupos'
  });
  return Grupo;
};