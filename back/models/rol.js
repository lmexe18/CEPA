'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class rol extends Model {
    static associate(models) {
      this.hasMany(models.process.env.MODEL_ROL_USUARIO, {
        foreignKey: process.env.FK_ROL,
        as: process.env.ROL_USUARIO
      });
    }
  }
  rol.init({
    nombre: DataTypes.STRING
  }, {
    sequelize,
    modelName: process.env.MODEL_ROL,
    tableName: process.env.TABLA_ROLES
  });
  return rol;
};