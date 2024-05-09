/** Las horas a las que se pueden utilizar las clases
 * Ya sea mediante reservas o que la clase esté en el horario de un curso
 */
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RangoHorario extends Model {
    static associate(models) {
    }
  }
  RangoHorario.init({
    idTurno: DataTypes.INTEGER,
    horaInicio: DataTypes.TIME(4),
    horaFin: DataTypes.TIME(4),
  }, {
    sequelize,
    modelName: process.env.MODEL_RANGO_HORARIO,
    tableName: process.env.TABLA_RANGOS_HORARIOS
  });
  return RangoHorario;
};