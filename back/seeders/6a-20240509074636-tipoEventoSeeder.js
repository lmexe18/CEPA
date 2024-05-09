'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(process.env.TABLA_TIPOS_EVENTOS, [{
      nombre: 'Excursiones',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      nombre: 'Actos',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      nombre: 'Asociación Amigos CEPA',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      nombre: 'Días Señalados',
      createdAt: new Date(),
      updatedAt: new Date()
    }
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete(process.env.TABLA_TIPOS_EVENTOS, null, {});

  }
};
