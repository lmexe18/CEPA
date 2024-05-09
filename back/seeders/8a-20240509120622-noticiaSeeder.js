'use strict';
const {noticiaFactory}=require('../factories/noticiaFactory')
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const noticias = await noticiaFactory(3,18);
    await queryInterface.bulkInsert(process.env.TABLA_NOTICIAS, noticias, {});
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete(process.env.TABLA_NOTICIAS, null, {});
  }
};