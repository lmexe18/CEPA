'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert(process.env.TABLA_TIPOS_AULAS, [{
            nombre: 'Especial',
            activo:true,
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            nombre: 'Normal',
            activo:true,
            createdAt: new Date(),
            updatedAt: new Date()
        }
        ])
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete(process.env.TABLA_TIPOS_AULAS, null, {});
    }
};
