const { Evento } = require('../models');
const faker = require('@faker-js/faker');

const eventosFactory = async (ctos = 1) => {
    let factory = [];

    for (let i = 1; i <= ctos; i++) {
        let evento = {
            nombre: `Evento ${i}`,
            descripcion: `Descripción del evento ${i}`,
            fecha: new Date().getDay().toString()+'/'+new Date().getMonth().toString()+'/'+new Date().getFullYear().toString(),
            hora: new Date().getHours().toString()+':'+new Date().getMinutes().toString(),
            fotoCartel: "aula.jpg",
            mg:0,
            visibilidad: Math.random() < 0.5 ? true : false,
            numAsistentes: Math.random() * 19+1,
            createdAt: new Date(),
            updatedAt: new Date()
        };
        factory.push(evento);
    }


    return factory;
};

module.exports = {
    eventosFactory
};
