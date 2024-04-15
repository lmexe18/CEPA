'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class usuario extends Model {
    static associate(models) {
      this.hasMany(models.rolUsuario, {
        foreignKey: 'id',
        as: process.env.MODEL_ROL_USUARIO,
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