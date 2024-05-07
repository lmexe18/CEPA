'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(process.env.TABLA_EQUIPOS_DIRECTIVOS, [
      {
        puesto: 'Director',
        idUsuario: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        puesto: 'Secretario',
        idUsuario: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        puesto: 'Jefe de Estudios',
        idUsuario: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        puesto: 'Jefe de Estudios Adjunto',
        idUsuario: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        puesto: 'Administración Secretaría',
        idUsuario: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete(process.env.TABLA_EQUIPOS_DIRECTIVOS, null, {});
  }
};
