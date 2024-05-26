'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Rol extends Model {
    static associate(models) {
      this.hasMany(models.RolUsuario, {
        foreignKey: 'id',
        as: 'rolUsuario'
      });
    }
  }
  Rol.init({
    nombre: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Rol',
    tableName: 'roles'
  });
  return Rol;
};