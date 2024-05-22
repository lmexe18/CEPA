'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Evento extends Model {
    static associate(models) {
      this.hasMany(models.AsistenciaEvento, {
        foreignKey:'idEvento',
        as:'asistencias'
      });
      this.hasMany(models.EventoGaleria, { 
        foreignKey:'idEvento',
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
    modelName: 'Evento',
    tableName: 'eventos'
  });
  return Evento;
};