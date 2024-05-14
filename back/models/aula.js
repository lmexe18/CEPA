'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Aula extends Model {

    static associate(models) {
      /*this.hasMany(models.ReservaAula, {
        foreignKey: 'idAula',
        as: 'reservasAula'
      });
      
      this.belongsTo(models.tipoAula, {
        foreignKey: 'idTipo',
        as: 'tipoAula'
      });*/
    }
  }
  Aula.init({
    nombre: DataTypes.STRING,
    idTipo: DataTypes.INTEGER,
    activo: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: process.env.MODEL_AULA,
    tableName: process.env.TABLA_AULAS
  });
  return Aula;
};