'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(process.env.TABLA_USERS_DEPA, {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idUsuario: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: {
            tableName: process.env.TABLA_USUARIOS,
          },
          key: 'id'
        },
        onDelete: 'CASCADE'
      },
      idDepartamento: {
        type: Sequelize.INTEGER,
        allowNull: false, 
        references: {
          model: {
            tableName: process.env.TABLA_DEPARTAMENTOS
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
    await queryInterface.dropTable(process.env.TABLA_USERS_DEPA);
  }
};
