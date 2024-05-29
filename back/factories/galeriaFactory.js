const { Galeria } = require('../models');

const galeriaFactory = async (ctos = 1) => {
    let factory = [];

    for (let i = 1; i <= ctos; i++) {
        let galeria = {
            idEvento: 1,
            foto: "aula.jpg",
            createdAt: new Date(),
            updatedAt: new Date()
        };
        factory.push(galeria);
    }
    
    return factory;
};

module.exports = {
    galeriaFactory
};