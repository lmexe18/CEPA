'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('tipos_cursos', [{
      nombre: 'Básica Alfabetizacion',
      activo: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nombre: 'Básica Neolectores',
      activo: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nombre: 'Básica Formación Base',
      activo: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nombre: 'Básica Castellano para extranjeros',
      activo: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nombre: 'Secundaria Presencial',
      activo: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nombre: 'Secundaria Distancia',
      activo: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nombre: 'Grado Medio Video Disc-Jockey y Sonido',
      activo: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nombre: 'Grado Medio Sistemas Microinformáticos y Redes',
      activo: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nombre: 'Grado Medio de Preimpresión digital',
      activo: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nombre: 'Grado Medio de Atención  a personas con situación de dependencia',
      activo: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nombre: 'Idiomas',
      activo: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nombre: 'Ofimática y nuevas tecnologías',
      activo: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nombre: 'Cultura de CLM',
      activo: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nombre: 'Literatura y cine',
      activo: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nombre: 'Memoria y Hábitos saludables',
      activo: true,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      nombre: 'Taller idioma',
      activo: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }
    ])
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('tipos_cursos', null, {});

  }
};