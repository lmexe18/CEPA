'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class AsistenciaEvento extends Model {
    static associate(models) {
     /* this.belongsTo(models.Evento, {
        foreignKey: 'idEvento',
        as: 'evento'
      });
      this.belongsTo(models.Usuario, {
        foreignKey: 'idUsuario',
        as: 'usuario'
      });*/
    }
  }

  AsistenciaEvento.init({
    idEvento: DataTypes.INTEGER,
    idUsuario: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: process.env.MODEL_ASISTENCIA_EVENTO,
    tableName: process.env.TABLA_ASISTENCIAS_EVENTOS
  });

  return AsistenciaEvento;
};
