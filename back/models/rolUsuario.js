'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class RolUsuario extends Model {
    static associate(models) {
      this.belongsTo(models.Usuario, {
        foreignKey: 'id',
        as: process.env.MODEL_USUARIO
      });
      this.belongsTo(models.Rol, {
        foreignKey: 'id',
        as: process.env.MODEL_ROL
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
    modelName: process.env.MODEL_ROLES_USUARIO,
    tableName: process.env.TABLA_ROL_USUARIO
  });
  return RolUsuario;
};