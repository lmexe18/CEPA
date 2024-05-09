'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.bulkInsert(process.env.TABLA_ASIGNATURAS, [{
            nombre: 'Lengua Castella y Literatura',
            idDepartamento: 2,
            activo: false,
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            nombre: 'Inglés',
            idDepartamento: 2,
            activo: false,
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            nombre: 'Geografía e Historia',
            idDepartamento: 3,
            activo: false,
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            nombre: 'Iniciación a la Actividad Emprendedora y Empresarial',
            idDepartamento: 3,
            activo: false,
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            nombre: 'Educación Plástica y Visual',
            idDepartamento: 3,
            activo: false,
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            nombre: 'Educación Audiovisual y Música',
            idDepartamento: 3,
            activo: false,
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            nombre: 'Biología y Geología',
            idDepartamento: 1,
            activo: false,
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            nombre: 'Física y Química',
            idDepartamento: 1,
            activo: false,
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            nombre: 'Matemáticas',
            idDepartamento: 1,
            activo: false,
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            nombre: 'Matemáticas Académicas',
            idDepartamento: 1,
            activo: false,
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            nombre: 'Matemáticas Aplicadas',
            idDepartamento: 1,
            activo: false,
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            nombre: 'Ciencias Aplicadas a la Actividad Profesional',
            idDepartamento: 1,
            activo: 0,
            createdAt: new Date(),
            updatedAt: new Date()
        }, {
            nombre: 'Educación Física',
            idDepartamento: 1,
            activo: false,
            createdAt: new Date(),
            updatedAt: new Date()
        }
        ])
    },

    async down(queryInterface, Sequelize) {

        await queryInterface.bulkDelete(process.env.TABLA_ASIGNATURAS, null, {});

    }
};
