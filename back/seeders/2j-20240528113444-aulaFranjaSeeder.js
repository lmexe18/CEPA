'use strict';
const {aulaFranjaFactory}=require('../factories/aulaFranjaFactory')
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const aulafranjas = await aulaFranjaFactory(1);
    await queryInterface.bulkInsert('aula_franjas', aulafranjas, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('aula_franjas', null, {});
  }
};