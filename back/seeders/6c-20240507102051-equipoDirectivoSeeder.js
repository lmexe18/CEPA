'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('equipos_directivos', [
      {
        puesto: 'Directora',
        nombre: 'Mª Luisa García Baeza',
        email: '13304067.cea@edu.jccm.es',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        puesto: 'Secretario',
        nombre: 'Javier Sánchez Prada',
        email: '13304067.cea@edu.jccm.es',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        puesto: 'Jefe de Estudios',
        nombre: 'Manuel Serrano Laso',
        email: 'fefaturaestudios.agala@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        puesto: 'Jefa de Estudios Adjunta',
        nombre: 'Elena Gónzalez Sanz',
        email: 'jefaturadistancia@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        puesto: 'Administración Secretaría',
        nombre: 'Mª Jesús Díaz-Santos Morales',
        email: '133004067.cea@edu.jccm.es',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('equipos_directivos', null, {});
  }
};
