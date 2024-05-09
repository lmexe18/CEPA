'use strict';

const { Temario } = require('../models'); 

module.exports = {
  async up(queryInterface, Sequelize) {
    await Temario.bulkInsert(process.env.TABLA_TEMARIOS, [
      {
        tema: 'Tema 1.1',
        link: 'https://drive.google.com/file/d/1T3Q5k7FwekVBOO_ysBrq_ss3SIJmi6ui/view',
        idAsignatura: 1,
        visibilidad: false,
        activo: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        tema: 'Tema 1.2',
        link: 'https://drive.google.com/file/d/1SOcLHLhnfI4N-UXiBkBkxLcRNqloRIdp/view',
        idAsignatura: 1,
        visibilidad: false,
        activo: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        tema: 'Tema 1.3',
        link: 'https://drive.google.com/file/d/1xQ_hMfLJHGNJR2vbWAMFQsnfHXQGNb58/view',
        idAsignatura: 1,
        visibilidad: false,
        activo: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        tema: 'Tema 1.4',
        link: 'https://drive.google.com/file/d/1vbb5ablTC8SeSphXBohnZAmBSsy63xFA/view',
        idAsignatura: 1,
        visibilidad: false,
        activo: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        tema: 'Tema 1.5',
        link: 'https://drive.google.com/file/d/1N0LLBxHsarmR_DfVtW9gIsqOSabg5HAP/view',
        idAsignatura: 1,
        visibilidad: false,
        activo: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        tema: 'Tema 1.6',
        link: 'https://drive.google.com/file/d/1mwVHq1_8Gy7zR1PZ8j7bQnIPYSypM8UP/view',
        idAsignatura: 1,
        visibilidad: false,
        activo: false,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
     await queryInterface.bulkDelete(process.env.TABLA_TEMARIOS, null, {});
  }
};
