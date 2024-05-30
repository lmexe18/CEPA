'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class rol extends Model {
    static associate(models) {
      this.hasMany(models.rolAsignado, {
        foreignKey: 'idRol',
        as: 'rolAsignado'
      });
    }
  }
  rol.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    nombre: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'rol',
    tableName: 'roles'
  });
  return rol;
};