//Jaime
///Óscar (cambiado nombre de tablas)

'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(process.env.TABLA_RANGOS_HORARIOS, {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idTurno: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references:{
          model:{
            tableName: process.env.TURNOS
          },
          key: 'id'
        },
        onDelete: 'CASCADE',
        allowNull: true
      },
      horaInicio: {
        allowNull: false,
        type: Sequelize.TIME(4)
      },
      horaFin: {
        allowNull: false,
        type: Sequelize.TIME(4)
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
    await queryInterface.dropTable(process.env.TABLA_RANGOS_HORARIOS);
  }
};