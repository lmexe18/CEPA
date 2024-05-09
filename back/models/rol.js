'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Rol extends Model {
    static associate(models) {
      this.hasMany(models.rolUsuario, {
        foreignKey: 'id',
        as: process.env.ROL_USUARIO
      });
    }
  }
  Rol.init({
    nombre: DataTypes.STRING
  }, {
    sequelize,
    modelName: process.env.MODEL_ROL,
    tableName: process.env.TABLA_ROLES
  });
  return Rol;
};