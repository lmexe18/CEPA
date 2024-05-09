const { NoticiaGaleria } = require('../models');

const noticiaGaleriaFactory = async (ctos = 1) => {
    let factory = [];

    for (let i = 1; i <= ctos; i++) {
        let galeria = {
            idNoticia: 1,
            foto: "CEPA.jpg",
            createdAt: new Date(),
            updatedAt: new Date()
        };
        factory.push(galeria);
    }
    
    return factory;
};

module.exports = {
    noticiaGaleriaFactory
};