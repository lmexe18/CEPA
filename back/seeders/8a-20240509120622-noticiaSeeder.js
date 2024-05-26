'use strict';
const {noticiaFactory}=require('../factories/noticiaFactory')
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const noticias = await noticiaFactory(3);
    await queryInterface.bulkInsert('noticias', noticias, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('noticias', null, {});
  }
};