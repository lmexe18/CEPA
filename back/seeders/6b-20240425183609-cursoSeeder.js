'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    // Turno: Mañana, Tarde, Mañana y Tarde, Noche
    //        1       2      3               4
    await queryInterface.bulkInsert(process.env.TABLA_CURSOS, [
      { // 1º alfabetización
        numeroCurso: 1,
        idTurno: 2,
        horario: 'https://docs.google.com/document/d/14zBpjvxSLfZPuK9MdmnU2hfvwI12pU_E/edit',
        idTipoCurso: 1,
        idTutor: 1,
        activo: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      { // 1º neolectores
        numeroCurso: 1,
        idTurno: "Tarde",
        horario: 'https://docs.google.com/document/d/17ktpR3J4p_BpH_U4PbhFVO5ZJ2txArry/edit',
        idTipoCurso: 2,
        idTutor: 2,
        activo: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      { // 1º formación base
        numeroCurso: 1,
        idTurno: 2,
        horario: 'https://docs.google.com/document/d/1WGachlgcVFDQb5OZQgd6D3Xn2loVWUNA/edit',
        idTipoCurso: 3,
        idTutor: 2,
        activo: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      { // 1º castellano para extranjeros
        numeroCurso: 1,
        idTurno: 3,
        horario: 'https://docs.google.com/document/d/1Wwavhcn9AlIKNL9Cyx9nUlnaC4dOaHgk/edit',
        idTipoCurso: 4,
        idTutor: 3,
        activado: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      { // 1º secundaria presencial mañana
        numeroCurso: 1,
        idTurno: 1,
        horario: 'https://docs.google.com/document/d/1fKOywvmLGf2IALUZI2o19n2NBXbg5rX4/edit',
        idTipoCurso: 5,
        idTutor: 4,
        activo: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      { // 1º secundaria presencial tarde
        numeroCurso: 1,
        idTurno: 2,
        horario: 'https://docs.google.com/document/d/1YR64_YdfAB0Jn35dJKKW8VoRYoaRJ3Op/edit',
        idTipoCurso: 5,
        idTutor: 4,
        activo: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      { // 2º secundaria presencial mañana
        numeroCurso: 2,
        idTurno: 1,
        horario: 'https://docs.google.com/document/d/1HfJ7DU0OpoScJQw8Dr916NzOaXijsBDv/edit',
        idTipoCurso: 5,
        idTutor: 4,
        activo: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      { // 2º secundaria presencial tarde
        numeroCurso: 2,
        idTurno: 2,
        horario: 'https://docs.google.com/document/d/1k7ALkgW673KzpCknY-fsEXdayn1rNU8Z/edit',
        idTipoCurso: 5,
        idTutor: 4,
        activo: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      { // 3º secundaria presencial mañana
        numeroCurso: 3,
        idTurno: 1,
        horario: null,
        idTipoCurso: 5,
        idTutor: 4,
        activo: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      { // 3º secundaria presencial tarde
        numeroCurso: 3,
        idTurno: 2,
        horario: null,
        idTipoCurso: 5,
        idTutor: 4,
        activado: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      { // 4º secundaria presencial mañana
        numeroCurso: 4,
        idTurno: 1,
        horario: null,
        idTipoCurso: 5,
        idTutor: 4,
        activo: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      { // 4º secundaria presencial tarde
        numeroCurso: 4,
        idTurno: 2,
        horario: null,
        idTipoCurso: 5,
        idTutor: 4,
        activo: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      { // 1º secundaria distancia
        numeroCurso: 1,
        idTurno: 2,
        horario: null,
        idTipoCurso: 6,
        idTutor: 4,
        activo: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      { // 2º secundaria distancia
        numeroCurso: 2,
        idTurno: 2,
        horario: null,
        idTipoCurso: 6,
        idTutor: 4,
        activado: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      { // 3º secundaria distancia
        numeroCurso: 3,
        idTurno: 2,
        horario: null,
        idTipoCurso: 6,
        idTutor: 4,
        activo: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      { // 4º secundaria distancia
        numeroCurso: 4,
        idTurno: 2,
        horario: null,
        idTipoCurso: 6,
        idTutor: 4,
        activo: false,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      { // 1º grado medio video disc-jockey y sonido

      }
    ])
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete(process.env.TABLA_CURSOS, null, {});
  }
};
