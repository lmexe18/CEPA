const { Evento } = require('../models');
const faker = require('@faker-js/faker');
/*Laura María Pedraza Gómez* */
const eventoFactory = async (ctos = 1) => {
    let factory = [];

    for (let i = 1; i <= ctos; i++) {
        let evento = {
            nombre: `Evento ${i}`,
            descripcion: `Descripción del evento ${i}`,
            fechaHora: new Date(),
            mg:0,
            visibilidad: Math.random() < 0.5 ? true : false,
            numAsistentes: Math.random() * 19+1,
            idTipoEvento: 1,
            createdAt: new Date(),
            updatedAt: new Date()
        };
        factory.push(evento);
    }


    return factory;
};

module.exports = {
    eventoFactory
};