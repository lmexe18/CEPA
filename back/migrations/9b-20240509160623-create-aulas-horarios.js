'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(process.env.TABLA_AULAS_HORARIOS, {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idAula: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: process.env.TABLA_AULAS
          },
          key: 'id'
        },
        onDelete: 'CASCADE'
      },
      idFranja: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: process.env.TABLA_RANGOS_HORARIOS
          },
          key: 'id'
        },
        onDelete: 'CASCADE'
      },
      reserva: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
        defaultValue: true
      },
      idUsuario: {
        allowNull: true,
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: process.env.TABLA_USUARIOS
          },
          key: 'id'
        },
        onDelete: 'CASCADE'
      },
      activo: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
        defaultValue: true
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
    await queryInterface.dropTable(process.env.TABLA_AULAS_HORARIOS);
  }
};
