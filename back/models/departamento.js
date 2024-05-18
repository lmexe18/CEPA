'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Departamento extends Model {

    static associate(models) {

      Departamento.belongsToMany(models.Usuarios, {
        through: models.UsuariosDepartamento,
        as: 'usuarioDepartamento',
        foreignKey: 'id',
      });

      // Un departamento tiene muchas asignaturas
      Departamento.hasMany(models.Asignaturas, {
        foreignKey: 'idAsignatura',
        as: 'asignatura'
      });

    }
  }
  Departamento.init({
    nombre: DataTypes.STRING,
    descripcion: DataTypes.STRING,
    foto: DataTypes.STRING,
    descripcion: DataTypes.STRING,
    idJefeDepartamento: DataTypes.INTEGER,
    activo: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Departamento',
    tableName: 'departamentos'
  });
  return Departamento;
};