'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class departamento extends Model {

    static associate(models) {
      Departamento.belongsToMany(models.Usuario, {
        through: models.UsuariosDepartamento,
        as: process.env.TABLA_USUARIOS,
        foreignKey: process.env.ID_DEPARTAMENTO,
        otherKey: process.env.ID_USUARIO
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
    modelName: process.env.MODEL_DEPARTAMENTO,
    tableName: process.env.TABLA_DEPARTAMENTO
  });
  return departamento;
};