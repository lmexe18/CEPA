'use strict';

const { asistenciaEventoFactory } = require('../factories/asistenciaEventoFactory');

module.exports = {
  async up(queryInterface, Sequelize) {
    const asistencias = await asistenciaEventoFactory(3);
    await queryInterface.bulkInsert(process.env.TABLA_ASISTENCIAS_EVENTOS, asistencias, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete(process.env.TABLA_ASISTENCIAS_EVENTOS, null, {});
  }
};