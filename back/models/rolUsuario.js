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
    idUsuario: {
      type: DataTypes.INTEGER,
      references: {
        model: process.env.MODEL_USUARIO,
        key: 'id'
      }
    },
    idRol: {      
      type: DataTypes.INTEGER,
      references: {
        model: process.env.MODEL_ROL,
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: process.env.MODEL_ROL_USUARIO,
    tableName: process.env.TABLA_ROLES_USUARIOS
  });
  return RolUsuario;
};
