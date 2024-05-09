/**
 * Se pueden almacenar tanto reservas como horarios
 */

'use strict';
const {
  Model
} = require('sequelize');

const Aula = require('./aula');
const RangoHorario = require('./rangoHorario');

module.exports = (sequelize, DataTypes) => {
  class AulaHorario extends Model {
    static associate(models) {
      this.belongsTo(models.Aula, {
        foreignKey: 'idAula',
        as: 'aula'
      });
      this.belongsTo(models.RangoHorario, {
        foreignKey: 'idRangoHorario',
        as: 'franja'
      });
    }
  }
  AulaHorario.init({
    idAula:DataTypes.INTEGER,
    idFranja: DataTypes.INTEGER,
    reserva: DataTypes.BOOLEAN, // Para saber si ha sido una reserva (true) o si pertenece a un horario (false)
    idUsuario: DataTypes.INTEGER, // Para saber quien ha realizado la reserva
    activo: DataTypes.BOOLEAN // Se puede cancelar la reserva pero se quedaría almacenada (soft delete)
  }, {
    sequelize,
    modelName: process.env.MODEL_AULA_HORARIO,
    tableName: process.env.TABLA_AULAS_HORARIOS
  });
  return AulaHorario;
};