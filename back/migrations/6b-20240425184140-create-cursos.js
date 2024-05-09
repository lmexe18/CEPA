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
        type: Sequelize.INTEGER,
        allowNull: false
      },
      fechaInicio: {
        type: Sequelize.DATE,
        allowNull: false
      },
      fechaFinalizacion: {
        type: Sequelize.DATE,
        allowNull: false
      },
      horario: {
        type: Sequelize.STRING,
        allowNull: false
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
            tableName:process.env.TABLA_USUARIOS
          },
          key: 'id'
        }
      },
      activo: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: false
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
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable(process.env.TABLA_GRUPOS);
  }
};