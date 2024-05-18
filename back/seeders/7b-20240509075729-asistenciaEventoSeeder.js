'use strict';

const { asistenciaEventoFactory } = require('../factories/asistenciaEventoFactory');

module.exports = {
  async up(queryInterface, Sequelize) {
    const asistencias = await asistenciaEventoFactory(3);
    await queryInterface.bulkInsert('asistencias_eventos', asistencias, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('asistencias_eventos', null, {});
  }
};