'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert(process.env.TABLA_ASIGNATURAS, [{
            nombre: 'Lengua Castella y Literatura',
            departamentoId: 2,
            activado: 0,
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            nombre: 'Inglés',
            departamentoId: 2,
            activado: 0,
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            nombre: 'Geografía e Historia',
            departamentoId: 3,
            activado: 0,
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            nombre: 'Iniciación a la Actividad Emprendedora y Empresarial',
            departamentoId: 3,
            activado: 0,
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            nombre: 'Educación Plástica y Visual',
            departamentoId: 3,
            activado: 0,
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            nombre: 'Educación Audiovisual y Música',
            departamentoId: 3,
            activado: 0,
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            nombre: 'Biología y Geología',
            departamentoId: 1,
            activado: 0,
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            nombre: 'Física y Química',
            departamentoId: 1,
            activado: 0,
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            nombre: 'Matemáticas',
            departamentoId: 1,
            activado: 0,
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            nombre: 'Matemáticas Académicas',
            departamentoId: 1,
            activado: 0,
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            nombre: 'Matemáticas Aplicadas',
            departamentoId: 1,
            activado: 0,
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            nombre: 'Ciencias Aplicadas a la Actividad Profesional',
            departamentoId: 1,
            activado: 0,
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            nombre: 'Educación Física',
            departamentoId: 1,
            activado: 0,
            createdAt: new Date(),
            updatedAt: new Date()
        }
        ])
    },

    async down(queryInterface, Sequelize) {

        await queryInterface.bulkDelete(process.env.TABLA_ASIGNATURAS, null, {});

    }
};
