'use strict';
const {aulaFactory}=require('../factories/aulaFactory')
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const aula = await aulaFactory(1);
    await queryInterface.bulkInsert(process.env.TABLA_AULAS, aula, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete(process.env.TABLA_AULAS, null, {});
  }
};