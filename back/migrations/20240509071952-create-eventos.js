/**Laura María Pedraza Gómez */
'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(process.env.TABLA_EVENTOS, {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nombre: {
        type: Sequelize.STRING,
        allowNull: false
      },
      descripcion: {
        type: Sequelize.STRING,
        allowNull: false
      },
      fechaHora: {
        type: Sequelize.DATE,
        allowNull: false
      },
      fotoCartel: {
        type: Sequelize.STRING,
        allowNull: true
      },
      mg: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      visibilidad: {
        type: Sequelize.BOOLEAN,
        allowNull: false
      },
      numAsistentes: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      idTipoCurso:{
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{
          model:{
            tableName: process.env.TABLA_TIPO_EVENTOS
          }
        },
        onDelete: 'CASCADE'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date()
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date()
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable(process.env.TABLA_EVENTOS);
  }
};