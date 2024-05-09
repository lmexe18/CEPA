'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(process.env.TABLA_ASIGNATURAS_PROFES_CURSOS, {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idAsignatura: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model:{
            tableName: process.env.TABLA_ASIGNATURAS
          },
          key: 'id'
        },
        onDelete: 'CASCADE'
      },
      idUsuario: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model:{
            tableName: process.env.TABLA_USUARIOS
          },
          key: 'id'
        },
        onDelete: 'CASCADE'
      },
      idCurso: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references:{
          model:{
            tableName: process.env.TABLA_CURSOS
          },
          key: 'id'
        },
        onDelete: 'CASCADE'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      }
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable(process.env.TABLA_ASIGNATURAS_PROFES_CURSOS);
  }
};