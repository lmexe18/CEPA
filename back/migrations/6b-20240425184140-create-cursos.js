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
      idTurno:{
        type: Sequelize.INTEGER,
        allowNull: true,
        references:{
          model:{
            tableName:'turnos'
          },
          key:'id'
        },
        onDelete: 'CASCADE'
      },
      fechaInicio: {
        type: Sequelize.DATE,
        allowNull: true
      },
      fechaFinalizacion: {
        type: Sequelize.DATE,
        allowNull: true
      },
      horario: {
        type: Sequelize.STRING,
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
        onDelete: 'CASCADE'
      },
      idTutor: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName:'usuarios'
          },
          key: 'id'
        },
        onDelete: 'CASCADE'
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