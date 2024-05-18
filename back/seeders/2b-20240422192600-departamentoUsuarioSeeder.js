
'use strict';
const { departamentoUsuarioFactory } = require('../factories/departamentoUsuarioFactory');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const usuario = await departamentoUsuarioFactory(1);
    await queryInterface.bulkInsert('departamentos_usuarios', usuario, {});
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('departamentos_usuarios', null, {});
  }
};
