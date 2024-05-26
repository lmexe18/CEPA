'use strict';
const {
  Model
} = require('sequelize');

const Aula = require('./aula');

module.exports = (sequelize, DataTypes) => {
  class Horario extends Model {
    static associate(models) {
      
      this.belongsTo(models.Asignatura,{
        foreignKey: 'id',
        as: 'asignatura'
      })
      this.belongsTo(models.Curso,{
        foreignKey: 'id',
        as: 'curso'
      })
    }
  }
  Horario.init({
    horaInicio: DataTypes.STRING,
    horaFin: DataTypes.STRING,
    dia: DataTypes.STRING,
    idAula:DataTypes.INTEGER, 
    idAsignatura: DataTypes.INTEGER,
    idCurso: DataTypes.INTEGER, 
  }, {
    sequelize,
    modelName: 'Horario',
    tableName: 'horarios'
  });
  return Horario;
};