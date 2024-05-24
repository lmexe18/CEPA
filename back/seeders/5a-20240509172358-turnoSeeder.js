'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('turnos', [
      {
        nombre: 'Mañana',
        horaInicio: '08:30',
        horaFin: '14:30',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: 'Mañana y Tarde',
        horaInicio: '08:30',
        horaFin: '21:30',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: 'Tarde',
        horaInicio: '14:30',
        horaFin: '21:30',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: 'Noche',
        horaInicio: '21:30',
        horaFin: '08:30',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('turnos', null, {});
  }
};
