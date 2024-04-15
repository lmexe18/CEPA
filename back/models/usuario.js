'use strict';
require('dotenv').config()
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class usuario extends Model {
    static associate(models) {
      this.hasMany(models.rolAsignado, {
        foreignKey: process.env.FK_USUARIO,
        as: process.env.ROLES_USUARIO,
      });
    }
  }
  user.init({
    nombre: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: process.env.MODEL_USUARIO,
    tableName: process.env.TABLA_USUARIOS
  });
  return usuario;
};