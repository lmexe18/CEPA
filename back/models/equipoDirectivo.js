'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class equipoDirectivo extends Model {
    static associate(models) {

      // Relación de 1:1 entre equipoDirectivo y Usuario
      this.belongsTo(models.usuario, {
        foreignKey: 'idUsuario',
        as: 'usuario'
      });
      
    }
  }
  equipoDirectivo.init({
    puesto: DataTypes.STRING,
    idUsuario: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'EquipoDirectivo',
    tableName: 'equipo_directivo'
  });
  return equipoDirectivo;
};