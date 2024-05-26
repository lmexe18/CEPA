'use strict';
const {noticiaGaleriaFactory}=require('../factories/noticiaGaleriaFactory')
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const galeria = await noticiaGaleriaFactory(5);
    await queryInterface.bulkInsert('noticias_galerias', galeria, {});
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('noticias_galerias', null, {});
  }
};
