'use strict';
const {rolAsignadoFactory}=require('../factories/rolesAsignadosFactory')
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const roles = await rolAsignadoFactory(5);
    await queryInterface.bulkInsert('roles_asignados', roles, {});
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('roles_asignados', null, {});
  }
};
