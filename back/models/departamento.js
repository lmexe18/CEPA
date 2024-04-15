'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class departamento extends Model {

    static associate(models) {
      departamento.belongsToMany(models.usuarios, {
        through: models.UsuariosDepartamento,
        as: process.env.TABLA_USUARIOS,
        foreignKey: 'id',
      });

      // Un departamento tiene muchas asignaturas
      departamento.hasMany(models.asignaturas, {
        foreignKey: 'id',
        as: 'asignaturasPorDepartamento'
      });

    }
  }
  departamento.init({
    nombre: DataTypes.STRING,
    nombreFoto: DataTypes.STRING,
    extensionFoto:DataTypes.STRING,
    descripcion: DataTypes.STRING,
    jefeDepartamentoId: DataTypes.INTEGER,
    activo: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: process.env.MODEL_DEPARTAMENTO,
    tableName: process.env.TABLA_DEPARTAMENTO
  });
  return departamento;
};