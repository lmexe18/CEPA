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