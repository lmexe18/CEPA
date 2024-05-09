'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Contacto extends Model {

    static associate(models) {
    }
  }
  Contacto.init({
    nombreCentro: DataTypes.STRING,
    direccion: DataTypes.STRING,
    telefono: DataTypes.NUMBER,
    email: DataTypes.STRING,
  }, {
    sequelize,
    modelName: process.env.MODEL_CONTACTO,
    tableName: process.env.TABLA_CONTACTOS
  });
  return Contacto;
};