'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RolUsuario extends Model {
    static associate(models) {
      this.belongsTo(models.Usuario, {
        foreignKey: 'idUsuario',
        as: 'usuario'
      });
      this.belongsTo(models.Rol, {
        foreignKey: 'idRol',
        as: 'rol'
      });
    }
  }
  
  RolUsuario.init({
    idUsuario: DataTypes.INTEGER,
    idRol: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'RolUsuario',
    tableName: 'roles_usuarios'
  });
  return RolUsuario;
};
