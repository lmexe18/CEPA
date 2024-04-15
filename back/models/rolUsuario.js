'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class rolUsuario extends Model {
    static associate(models) {
      this.belongsTo(models.usuario, {
        foreignKey: 'id',
        as: process.env.MODEL_USUARIO
      });
      this.belongsTo(models.rol, {
        foreignKey: 'id',
        as: process.env.MODEL_ROL
      });
    }
  }
  
  rolUsuario.init({
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
    tableName: process.env.TABLA_ROLES_USUARIOS
  });
  return rolUsuario;
};