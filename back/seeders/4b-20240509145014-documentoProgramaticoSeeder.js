'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('documentos_programaticos', [
      {
        nombre: 'Proyecto Educativo',
        link: 'https://docs.google.com/document/d/19rZDE-dfXqSKCz50oFjl73opSzfS2MMJ/edit',
        tipo: 'Documento',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: 'Normas de convivencia',
        link: 'https://drive.google.com/file/d/1WtzIdxq8E_Q7yFQMfYLfJ9UBR0taME3r/view',
        tipo: 'Documento',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: 'Plan de lectura',
        link: 'https://drive.google.com/file/d/19sLp-1q8XxEXKIZ7UjOvtRObVGgjzFrJ/view',
        tipo: 'Documento',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: 'PGA Ciudad Real',
        link:  'https://drive.google.com/file/d/1G7ZY8jG7RJY1KzNNruGoW9QChIcGQ7JY/view',
        tipo: 'Programación General Anual',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: 'PGA AEPA Malagón',
        link: 'https://drive.google.com/file/d/1w5JoTd_i8PCElBuOF6dfdKhnzTBg6RyB/view',
        tipo: 'Programación General Anual',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: 'PGA AEPA Miguelturra',
        link: 'https://drive.google.com/file/d/1_E1ZXNtV4UdlC-2j10hd1bfYcI9vFwJZ/view',
        tipo: 'Programación General Anual',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: 'PGA AEPA Pozuelo de Calatrava',
        link: 'https://drive.google.com/file/d/1uTJyySrZI4mekJK3OwNohKZfqh8GCPK5/view',
        tipo: 'Programación General Anual',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: 'PDG Ciudad Real',
        link: 'https://drive.google.com/file/d/1wGxw9tMiAO75wIBGrDmlZjvvdflU_f1J/view',
        tipo: 'Plan de Digitalización',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: 'PDG AEPA Malagón',
        link: 'https://drive.google.com/file/d/1ZkYKZ0XYp15kgxHEuXVKrFZ-WRlL0ylG/view',
        tipo: 'Plan de Digitalización',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: 'PDG AEPA Miguelturra',
        link: 'https://drive.google.com/file/d/1wwSAaWyPuba7zvE9LrlL_Q8XAOV3GLgt/view',
        tipo: 'Plan de Digitalización',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: 'PDG AEPA Pozuelo de Calatrava',
        link: 'https://drive.google.com/file/d/1LzoYzJ1DyrIWOdg5O1gnnsjaUrS0CBwL/view',
        tipo: 'Plan de Digitalización',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: 'Memoria anual del curso anterior',
        link: 'https://drive.google.com/file/d/1xC67MvQB5BKJxXx5KeQ3c3ZoQoIYCyMo/view',
        tipo: 'Documento',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: 'Plan de evaluación general del centro',
        link: 'https://docs.google.com/document/d/1mWbugAL_oWf-FIeqstojPI2-Wt5LxCrm/edit',
        tipo: 'Documento',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: 'Plan de igualdad',
        link: 'https://drive.google.com/file/d/103a8b0Jt8uvxv0Jex2EtfOOISKfksSPp/view',
        tipo: 'Documento',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: 'Plan de formación',
        link: 'https://drive.google.com/file/d/1v9zKKeLwDuObPG8gKsxZI2RLHbyCS92W/view',
        tipo: 'Documento',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('documentos_programaticos', null, {}); 
  }
};
