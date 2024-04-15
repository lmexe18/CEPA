'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class departamento extends Model {

    static associate(models) {
      Departamento.belongsToMany(models.Usuario, {
        through: models.UsuarioDepartamento,
        as: 'usuarios',
        foreignKey: 'departamentoId',
        otherKey: 'usuarioId'
      });

      // Un departamento tiene muchas asignaturas
      Departamento.hasMany(models.Asignatura, {
        foreignKey: 'departamentoId',
        as: 'asignaturasPorDepartamento'
      });
    }
  }
  Departamento.init({
    nombre: DataTypes.STRING,
    nombreFoto: DataTypes.STRING,
    extensionFoto:DataTypes.STRING,
    descripcion: DataTypes.STRING,
    jefeDepartamentoId: DataTypes.INTEGER,
    activo: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'departamento',
    tableName: 'departamentos'
  });
  return departamento;
};