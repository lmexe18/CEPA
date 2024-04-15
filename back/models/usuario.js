'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class usuario extends Model {
    static associate(models) {
      this.hasMany(models.rolUsuario, {
        foreignKey: process.env.FK_USUARIO,
        as: process.env.MODEL_ROL,
      });
    }
  }
  usuario.init({
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