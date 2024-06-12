'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert('asignaturas', [{
            nombre: 'Lengua Castella y Literatura',
            idCurso: 1,
            activo: true,
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            nombre: 'Inglés',
            idCurso: 1,
            activo: true,
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            nombre: 'Geografía e Historia',
            idCurso: 1,
            activo: false,
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            nombre: 'Iniciación a la Actividad Emprendedora y Empresarial',
            idCurso: 1,
            activo: true,
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            nombre: 'Educación Plástica y Visual',
            idCurso: 1,
            activo: true,
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            nombre: 'Educación Audiovisual y Música',
            idCurso: 1,
            activo: true,
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            nombre: 'Biología y Geología',
            idCurso: 1,
            activo: true,
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            nombre: 'Física y Química',
            idCurso: 1,
            activo: true,
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            nombre: 'Matemáticas',
            idCurso: 1,
            activo: true,
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            nombre: 'Matemáticas Académicas',
            idCurso: 1,
            activo: true,
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            nombre: 'Matemáticas Aplicadas',
            idCurso: 1,
            activo: true,
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            nombre: 'Ciencias Aplicadas a la Actividad Profesional',
            idCurso: 1,
            activo: true,
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            nombre: 'Educación Física',
            idCurso: 1,
            activo: true,
            createdAt: new Date(),
            updatedAt: new Date()
        }
        ])
    },

    async down(queryInterface, Sequelize) {

        await queryInterface.bulkDelete('asignaturas', null, {});

    }
};
