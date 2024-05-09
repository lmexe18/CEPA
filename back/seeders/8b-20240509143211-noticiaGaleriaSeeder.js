'use strict';
const {galeriaFactory}=require('../factories/noticiaGaleriaFactory')
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const galeria = await galeriaFactory(5);
    await queryInterface.bulkInsert(process.env.TABLA_NOTICIAS_GALERIAS, galeria, {});
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete(process.env.TABLA_NOTICIAS_GALERIAS, null, {});
  }
};
