'use strict';
require('dotenv').config()
const { usuarioFactory } = require('../factories/usuarioFactory');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const usuarios = await usuarioFactory(4);
    await queryInterface.bulkInsert('usuarios', usuarios, {});
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('usuarios', null, {});
  }
};
