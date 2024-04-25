'use strict';
const {usuarioDepartamentoFactory}=require('../factories/usuarioDepartamentoFactory')
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const usuario = await usuarioDepartamentoFactory(1);
    await queryInterface.bulkInsert(process.env.TABLA_USERS_DEPA, usuario, {});
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete(process.env.TABLA_USERS_DEPA, null, {});
  }
};
