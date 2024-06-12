'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('contactos', [
      {
        nombreCentro: 'CEPA Antonio Gala',
        direccion: 'C/ Bernardo Balbuena 5, 13002 Ciudad Real',
        telefono: 926214766,
        email:'13004067.cea@edu.jccm.es',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('contactos', null, {});
  }
};
