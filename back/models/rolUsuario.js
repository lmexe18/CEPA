'use strict';
const {
  Model
} = require('sequelize');
const user = require('./user');
const rol = require('./rol');
module.exports = (sequelize, DataTypes) => {
  class rolUsuario extends Model {
    static associate(models) {
      this.belongsTo(models.usuario, {
        foreignKey: process.env.FK_USUARIO,
        as: process.env.MODEL_USUARIO
      });
      this.belongsTo(models.rol, {
        foreignKey: process.env.FK_ROL,
        as: process.env.MODEL_ROL
      });
    }
  }
  
  rolUsuario.init({
    idUsuario: {
      type: DataTypes.INTEGER,
        references: {
          model: user,
          key: 'id'
        }
    },
    idRol: {      
      type: DataTypes.INTEGER,
      references: {
        model: rol,
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: process.env.MODEL_USUARIO,
    tableName: process.env.TABLA_ROLES_USUARIOS
  });
  return rolUsuario;
};