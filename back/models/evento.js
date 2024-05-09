'use strict';/*Laura María Pedraza Gómez* */
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Evento extends Model {
    static associate(models) {
      this.hasMany(models.Asistencia, {
        foreignKey:'id',
        as:'asistencias'
      });
      this.hasMany(models.Galeria, { 
        foreignKey:'id',
        as:'galerias'
      });
    }
  }
  Evento.init({
    nombre: DataTypes.STRING,
    descripcion: DataTypes.STRING,
    fechaHora: DataTypes.DATE,
    fotoCartel: DataTypes.STRING,
    mg: DataTypes.INTEGER,
    visibilidad: DataTypes.BOOLEAN,
    numAsistentes: DataTypes.INTEGER,
    idTipoEvento: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: process.env.MODEL_EVENTO,
    tableName: process.env.TABLA_EVENTOS
  });
  return Evento;
};