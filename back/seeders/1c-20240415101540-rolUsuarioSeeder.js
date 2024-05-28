'use strict';

const { rolUsuarioFactory } = require('../factories/rolUsuarioFactory');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        const roles = await rolUsuarioFactory(4);
        await queryInterface.bulkInsert('roles_asignados', roles, {});
    },

    async down(queryInterface, Sequelize) {
        return queryInterface.bulkDelete('roles_asignados', null, {});
    }
};
