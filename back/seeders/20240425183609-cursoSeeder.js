'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(process.env.TABLA_CURSOS, {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      numeroCurso: {
        type: Sequelize.INTEGER
      },
      fechaInicio: {
        type: Sequelize.DATE
      },
      fechaFinalizacion: {
        type: Sequelize.DATE
      },
      idHorario: {
        type: Sequelize.INTEGER
      },
      idTipoCurso: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName:process.env.TABLA_TIPOS_CURSOS
          },
          key: 'id'
        }
      },
      idTutor: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName:TABLA_USUARIOS
          },
          key: 'id'
        }
      },
      activo: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable(process.env.TABLA_CURSOS);
  }
};