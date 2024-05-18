'use strict';
const {rangoHorarioFactory}=require('../factories/rangoHorarioFactory')
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const rangos = await rangoHorarioFactory(1);
    await queryInterface.bulkInsert('rangos_horarios', rangos, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('rangos_horarios', null, {});
  }
};