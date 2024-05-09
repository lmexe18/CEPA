'use strict';

const { rolUsuarioFactory } = require('../factories/rolUsuarioFactory');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        const roles = await rolUsuarioFactory(5);
        await queryInterface.bulkInsert(process.env.TABLA_ROLES_USUARIO, roles, {});
    },

    async down(queryInterface, Sequelize) {
        return queryInterface.bulkDelete(process.env.TABLA_ROLES_USUARIO, null, {});
    }
};
