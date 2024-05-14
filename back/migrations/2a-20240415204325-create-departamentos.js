'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('departamentos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nombreFoto:{
        type: Sequelize.STRING,
        allowNull: true
      },
      extensionFoto:{
        type: Sequelize.STRING,
        allowNull: true
      },
      nombre: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      descripcion: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      idJefeDepartamento: {
        type: Sequelize.INTEGER,
        allowNull: true,
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
        allowNull: false,
        defaultValue: false
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
   await queryInterface.dropTable('departamentos');
  }
};
