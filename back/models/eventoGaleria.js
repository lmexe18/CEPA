'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class EventoGaleria extends Model {
    static associate(models) {
      this.hasMany(models.Evento, { 
        foreignKey: 'idEvento', 
        as: 'evento'
      });
    }
  }
  EventoGaleria.init({
    idEvento: DataTypes.INTEGER,
    foto: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'EventoGaleria',
    tableName: 'eventos_galerias'
  });
  return EventoGaleria;
};