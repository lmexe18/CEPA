'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    // Turno: Mañana, Tarde, Mañana y Tarde, Noche
    //        1       2      3               4
    await queryInterface.bulkInsert('cursos', [
      { // 1º alfabetización
        numeroCurso: 1,
        horario: 'https://docs.google.com/document/d/14zBpjvxSLfZPuK9MdmnU2hfvwI12pU_E/edit',
        idTipoCurso: 1,
        fechaInicio: null,
        fechaFin: null,
        idTipoCurso: null,
        idTutor: null,
        activo: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      { // 1º neolectores
        numeroCurso: 1,
        horario: 'https://docs.google.com/document/d/17ktpR3J4p_BpH_U4PbhFVO5ZJ2txArry/edit',
        fechaInicio: null,
        fechaFin: null,
        idTipoCurso: 2,
        idTutor: null,
        activo: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      { // 1º formación base
        numeroCurso: 1,
        horario: 'https://docs.google.com/document/d/1WGachlgcVFDQb5OZQgd6D3Xn2loVWUNA/edit',
        fechaInicio: null,
        fechaFin: null,
        idTipoCurso: 3,
        idTutor: null,
        activo: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      { // 1º castellano para extranjeros
        numeroCurso: 1,
        horario: 'https://docs.google.com/document/d/1Wwavhcn9AlIKNL9Cyx9nUlnaC4dOaHgk/edit',
        fechaInicio: null,
        fechaFin: null,
        idTipoCurso: 4,
        idTutor: null,
        activo: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      { // 1º secundaria presencial mañana
        numeroCurso: 1,
        horario: 'https://docs.google.com/document/d/1fKOywvmLGf2IALUZI2o19n2NBXbg5rX4/edit',
        fechaInicio: null,
        fechaFin: null,
        idTipoCurso: 5,
        idTutor: null,
        activo: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      { // 1º secundaria presencial tarde
        numeroCurso: 1,
        horario: 'https://docs.google.com/document/d/1YR64_YdfAB0Jn35dJKKW8VoRYoaRJ3Op/edit',
        fechaInicio: null,
        fechaFin: null,
        idTipoCurso: 5,
        idTutor: 4,
        activo: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      { // 2º secundaria presencial mañana
        numeroCurso: 2,
        horario: 'https://docs.google.com/document/d/1HfJ7DU0OpoScJQw8Dr916NzOaXijsBDv/edit',
        fechaInicio: null,
        fechaFin: null,
        idTipoCurso: 5,
        idTutor: null,
        activo: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      { // 2º secundaria presencial tarde
        numeroCurso: 2,
        horario: 'https://docs.google.com/document/d/1k7ALkgW673KzpCknY-fsEXdayn1rNU8Z/edit',
        fechaInicio: null,
        fechaFin: null,
        idTipoCurso: 5,
        idTutor: null,
        activo: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      { // 3º secundaria presencial mañana
        numeroCurso: 3,
        horario: null,
        fechaInicio: null,
        fechaFin: null,
        idTipoCurso: 5,
        idTutor: null,
        activo: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      { // 3º secundaria presencial tarde
        numeroCurso: 3,
        horario:null,
        fechaInicio: null,
        fechaFin: null,
        idTipoCurso: 5,
        idTutor: null,
        activo: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      { // 4º secundaria presencial mañana
        numeroCurso: 4,
        horario: null,
        fechaInicio: null,
        fechaFin: null,
        idTipoCurso: 5,
        idTutor: null,
        activo: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      { // 4º secundaria presencial tarde
        numeroCurso: 4,
        horario: null,
        fechaInicio: null,
        fechaFin: null,
        idTipoCurso: 5,
        idTutor: null,
        activo: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      { // 1º secundaria distancia
        numeroCurso: 1,
        horario: null,
        fechaInicio: null,
        fechaFin: null,
        idTipoCurso: 6,
        idTutor: null,
        activo: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      { // 2º secundaria distancia
        numeroCurso: 2,
        horario: null,
        fechaInicio: null,
        fechaFin: null,
        idTipoCurso: 6,
        idTutor: null,
        activo: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      { // 3º secundaria distancia
        numeroCurso: 3,
        horario: null,
        fechaInicio: null,
        fechaFin: null,
        idTipoCurso: 6,
        idTutor: null,
        activo: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      { // 4º secundaria distancia
        numeroCurso: 4,
        horario: null,
        fechaInicio: null,
        fechaFin: null,
        idTipoCurso: 6,
        idTutor: null,
        activo: false,
        createdAt: new Date(),
        updatedAt: new Date()
      }
      
      // 1º grado medio video disc-jockey y sonido

    ])
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('cursos', null, {});
  }
};
