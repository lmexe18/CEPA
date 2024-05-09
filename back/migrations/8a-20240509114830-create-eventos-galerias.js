'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(process.env.TABLA_EVENTOS_GALERIAS, {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idEvento: {
        type: Sequelize.INTEGER,
        references: {
          model:{
            tableName:'eventos'
          },
          key: 'id'
        },
        onDelete: 'CASCADE'
      },
      foto: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: 'CEPA.jgp'
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
    await queryInterface.dropTable(process.env.TABLA_EVENTOS_GALERIAS);
  }
};