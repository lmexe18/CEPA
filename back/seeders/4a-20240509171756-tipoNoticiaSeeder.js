'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('tipos_noticias', [{
      nombre: 'Erasmus',
      activo: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      nombre: 'La voz del mes',
      activo:true,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      nombre: 'Convocatorias',
      activo: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      nombre: 'Notas de prensa',
      activo: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('tipos_noticias', null, {});
  }
};
