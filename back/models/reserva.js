'use strict';
const {
  Model
} = require('sequelize');

const Aula = require('./aula');

module.exports = (sequelize, DataTypes) => {
  class Reserva extends Model {
    static associate(models) {
      this.belongsTo(models.Aula, {
        foreignKey: 'idAula',
        as: 'aula'
      })
    }
  }
  Reserva.init({
    horaInicio: DataTypes.TIME(4),
    horaFin: DataTypes.TIME(4),
    idTurno: DataTypes.INTEGER,
    idAula:DataTypes.INTEGER,  
    idProfesor: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Reserva',
    tableName: 'reservas'
  });
  return Reserva;
};