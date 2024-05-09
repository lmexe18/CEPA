'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class EventoGaleria extends Model {
    static associate(models) {
      this.hasMany(models.Evento, { 
        foreignKey: 'id', 
        as: 'evento'
      });
    }
  }
  EventoGaleria.init({
    idEvento: DataTypes.INTEGER,
    foto: DataTypes.STRING
  }, {
    sequelize,
    modelName: process.env.MODEL_EVENTO_GALERIA,
    tableName: process.env.TABLA_EVENTOS_GALERIAS
  });
  return EventoGaleria;
};