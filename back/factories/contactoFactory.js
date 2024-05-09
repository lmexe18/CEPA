const faker = require('faker');

const contactoFactory = async (ctos = 4) => {
    let factory = [];
    for (let i = 0; i < ctos; i++) {
        let contacto = {
            nombreCentro: "Centro " + i,
            direccion: "Direccion " + i,
            telefono: faker.phone.phoneNumber(),
            email: faker.internet.email(),
            createdAt: new Date(),
            updatedAt: new Date()
        };
        factory.push(contacto);
    }
    return Promise.all(factory);
};

module.exports = {
    contactoFactory
};