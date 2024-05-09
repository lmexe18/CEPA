'use strict';
const {rolFactory} =require('../factories/rolFactory')
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const roles = await rolFactory(4);
    await queryInterface.bulkInsert(process.env.TABLA_ROLES, roles, {});
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete(process.env.TABLA_ROLES, null, {});
  }
};
