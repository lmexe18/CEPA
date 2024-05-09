'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Temario extends Model {

    static associate(models) {
      // Un temario pertenece a una asignatura
      Temario.belongsTo(models.Asignatura, {
        foreignKey: 'asignaturaId',
        as: 'temarioAsignatura'
      });
    }
  }
  Temario.init({
    tema: DataTypes.STRING,
    link: DataTypes.STRING,
    idAsignatura: DataTypes.INTEGER,
    visibilidad: DataTypes.BOOLEAN,
    activo: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: process.env.MODEL_TEMARIO,
    tableName: process.env.TABLA_TEMARIOS
  });
  return Temario;
};