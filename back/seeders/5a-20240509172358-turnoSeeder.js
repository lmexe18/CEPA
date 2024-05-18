'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('turnos', [
      {
        nombre: 'Mañana',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: 'Mañana y Tarde',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: 'Tarde',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: 'Noche',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('turnos', null, {});
  }
};
