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
    horaInicio: DataTypes.STRING,
    horaFin: DataTypes.STRING,
    fecha: DataTypes.DATE,
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