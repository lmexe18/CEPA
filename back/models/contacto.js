'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class contacto extends Model {

    static associate(models) {
    }
  }
  contacto.init({
    nombreCentro: DataTypes.STRING,
    direccion: DataTypes.STRING,
    telefono: DataTypes.NUMBER,
    email: DataTypes.STRING,
  }, {
    sequelize,
    modelName: process.env.MODEL_CONTACTO,
    tableName: process.env.TABLA_CONTACTOS
  });
  return contacto;
};