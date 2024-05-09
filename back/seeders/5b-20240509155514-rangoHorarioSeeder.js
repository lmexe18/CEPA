'use strict';
const {rangoHorarioFactory}=require('../factories/rangoHorarioFactory')
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const rangos = await rangoHorarioFactory(1);
    await queryInterface.bulkInsert(process.env.TABLA_RANGOS_HORARIOS, rangos, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete(process.env.TABLA_RANGOS_HORARIOS, null, {});
  }
};