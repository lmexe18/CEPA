'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {

  class Enlace extends Model {

    static associate(models) {
      this.belongsTo(models.Seccion, {
        foreignKey: 'idSeccion',
        as: 'seccion'
      });
    }
  }
  Enlace.init({
    idSeccion: DataTypes.NUMBER,
    textoClave: DataTypes.STRING,
    url: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Enlace',
    tableName:'enlaces'
  });
  return Enlace;
};