'use strict';
const {aulaHorarioFactory}=require('../factories/aulaHorarioFactory')
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const aulahorarios = await aulaHorarioFactory(1);
    await queryInterface.bulkInsert(process.env.TABLA_AULAS_HORARIOS, aulahorarios, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete(process.env.TABLA_AULAS_HORARIOS, null, {});
  }
};