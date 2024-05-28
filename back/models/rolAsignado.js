'use strict';
const {
  Model
} = require('sequelize');
const user = require('./user');
const rol = require('./rol');
module.exports = (sequelize, DataTypes) => {
  class rolAsignado extends Model {
    
    static associate(models) {
      this.belongsTo(models.user, {
        foreignKey: 'idUser',
        as: 'usuarios'
      });
      this.belongsTo(models.rol, {
        foreignKey: 'idRol',
        as: 'rol'
      });
    }
  }
  
  rolAsignado.init({
    idUser: {
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
    modelName: 'rolAsignado',
  });
  return rolAsignado;
};

