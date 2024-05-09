'use strict';
const {galeriaFactory}=require('../factories/eventoGaleriaFactory')
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const galeria = await galeriaFactory(5);
    await queryInterface.bulkInsert(process.env.TABLA_EVENTOS_GALERIAS, galeria, {});
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete(process.env.TABLA_EVENTOS_GALERIAS, null, {});
  }
};
