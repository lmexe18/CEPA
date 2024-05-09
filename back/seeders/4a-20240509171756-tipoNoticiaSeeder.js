'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(process.env.TABLA_TIPOS_NOTICIAS, [{
      nombre: 'Erasmus',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      nombre: 'La voz del mes',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      nombre: 'Convocatorias',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      nombre: 'Notas de prensa',
      createdAt: new Date(),
      updatedAt: new Date()
    }
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete(process.env.TABLA_TIPOS_NOTICIAS, null, {});
  }
};
