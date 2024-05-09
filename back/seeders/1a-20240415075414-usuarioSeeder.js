'use strict';
require('dotenv').config()
const { usuarioFactory } = require('../factories/usuarioFactory');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const usuarios = await usuarioFactory(4);
    await queryInterface.bulkInsert(process.env.TABLA_USUARIOS, usuarios, {});
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete(process.env.TABLA_USUARIOS, null, {});
  }
};
