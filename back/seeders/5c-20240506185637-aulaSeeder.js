'use strict';
const {aulaFactory}=require('../factories/aulaFactory')
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const aulas = await aulaFactory(2);
    await queryInterface.bulkInsert('aulas', aulas, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('aulas', null, {});
  }
};