'use strict';
const {
  Model
} = require('sequelize');

const Aula = require('./aula');

module.exports = (sequelize, DataTypes) => {
  class HorarioReserva extends Model {
    static associate(models) {
      this.belongsTo(models.Aula, {
        foreignKey: 'idAula',
        as: 'aula'
      });
      this.belongsTo(models.Asignatura,{
        foreignKey: 'idAsignatura',
        as: 'asignatura'
      })
      this.belongsTo(models.Curso,{
        foreignKey: 'idCurso',
        as: 'curso'
      })
      this.belongsTo(models.Usuario,{
        foreignKey: 'idProfesor',
        as: 'profesor'
      })
    }
  }
  Horario.init({
    horaInicio: DataTypes.TIME(4),
    horaFin: DataTypes.TIME(4),
    dia: DataTypes.STRING,
    idAula:DataTypes.INTEGER, 
    idAsignatura: DataTypes.INTEGER,
    idCurso: DataTypes.INTEGER, 
    idProfesor: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Horario',
    tableName: 'horarios'
  });
  return Horario;
};