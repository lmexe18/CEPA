'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('cursos', {
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
      horario: {
        type: Sequelize.STRING,
        allowNull: true
      },
      fechaInicio: {
        type: Sequelize.DATE,
        allowNull: true
      },
      fechaFin: {
        type: Sequelize.DATE,
        allowNull: true
      },
      idTipoCurso: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName:'tipos_cursos'
          },
          key: 'id'
        },
        onDelete: 'CASCADE',
        allowNull: true,
      },
      idTutor: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName:'usuarios'
          },
          key: 'id'
        },
        onDelete: 'CASCADE',
        allowNull: true
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
    await queryInterface.dropTable('cursos');
  }
};