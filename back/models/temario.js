'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Temario extends Model {

    static associate(models) {
      // Un temario pertenece a una asignatura
      Temario.belongsTo(models.Asignatura, {
        foreignKey: 'idAsignatura',
        as: 'asignatura'
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
    modelName: 'Temario',
    tableName: 'temarios'
  });
  return Temario;
};