'use strict';
const {aulaReservaFactory}=require('../factories/aulaReservaFactory')
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const aulareservas = await aulaReservaFactory(1);
    await queryInterface.bulkInsert('aulas_reservas', aulareservas, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('aulas_reservas', null, {});
  }
};