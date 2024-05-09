'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable(process.env.TABLA_NOTICIAS, {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      titulo: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      enlace: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      foto: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      visibilidad:{
        type:Sequelize.BOOLEAN,
        allowNull:false,
        defaultValue:false
      },
      idCategoria: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: {
            tableName: process.env.TABLA_TIPOS_NOTICIAS
          },
          key: 'id'
        },
        onDelete:'CASCADE'
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
    await queryInterface.dropTable(process.env.TABLA_NOTICIAS);
  }
};