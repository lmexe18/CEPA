
'use strict';
const {horarioFactory}=require('../factories/horarioFactory')
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const horario = await horarioFactory(1);
    await queryInterface.bulkInsert('horarios', horarios, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('horarios', null, {});
  }
};