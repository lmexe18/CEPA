'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable(process.env.TABLA_NOTICIAS_GALERIAS, {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idNoticia: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: process.env.TABLA_NOTICIAS
          },
          key: 'id'
        },
        onDelete: 'CASCADE'
      },
      foto: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: 'CEPA.jpg'
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
  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable(process.env.TABLA_NOTICIAS_GALERIAS);
  }
};
