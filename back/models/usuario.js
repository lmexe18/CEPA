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
  Usuario.init({
    nombre: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    activo: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: process.env.MODEL_USUARIO,
    tableName: process.env.TABLA_USUARIOS
  });
  return Usuario;
};