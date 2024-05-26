'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('tipos_eventos', [{
      nombre: 'Excursiones',
      activo: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      nombre: 'Actos',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      nombre: 'Asociación Amigos CEPA',
      activo:true,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      nombre: 'Días Señalados',
      activo:true,
      createdAt: new Date(),
      updatedAt: new Date()
    }
    ])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('tipos_eventos', null, {});

  }
};
