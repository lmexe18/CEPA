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
      this.hasMany(models.AulaHorario, {
        foreignKey: 'idFranja',
        as: 'horarios'
      });
    }
  }
  AulaFranja.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    turno: DataTypes.STRING,
    horaInicio: DataTypes.TIME(4),
    horaFin: DataTypes.TIME(4),
    orden:DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'AulaFranja',
    tableName: 'aulaFranjas'
  });
  return AulaFranja;
};