'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class TipoAula extends Model {

    static associate(models) {
      this.hasMany(models.Aula, {
        foreignKey: 'id',
        as: 'aulas'
      });
    }
  }
  TipoAula.init({
    nombre: DataTypes.STRING,
    activo: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'TipoAula',
    tableName: 'tipos_aulas'
  });
  return TipoAula;
};