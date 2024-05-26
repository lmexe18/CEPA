'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Aula extends Model {

    static associate(models) {
      this.hasMany(models.AulaHorario, {
        foreignKey: 'idAulaHorario',
        as: 'aulaHorario'
      });
      
      this.belongsTo(models.TipoAula, {
        foreignKey: 'idTipoAula',
        as: 'tipoAula'
      })
    }
  }
  Aula.init({
    nombre: DataTypes.STRING,
    idTipo: DataTypes.INTEGER,
    activo: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'aula',
    tableName: 'aulas'
  });
  return Aula;
};