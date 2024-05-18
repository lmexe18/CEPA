'use strict';
const {eventoGaleriaFactory}=require('../factories/eventoGaleriaFactory')
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const galeria = await eventoGaleriaFactory(5);
    await queryInterface.bulkInsert('eventos_galerias', galeria, {});
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('eventos_galerias', null, {});
  }
};
