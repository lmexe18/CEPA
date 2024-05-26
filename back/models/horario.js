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
    }
  }
  Horario.init({
    horaInicio: DataTypes.STRING,
    horaFin: DataTypes.STRING,
    dia: DataTypes.STRING,
    idAula:DataTypes.INTEGER, 
    idAsignatura: DataTypes.INTEGER,
    idCurso: DataTypes.INTEGER, 
  }, {
    sequelize,
    modelName: 'Horario',
    tableName: 'horarios'
  });
  return Horario;
};