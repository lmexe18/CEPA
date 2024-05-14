const eventoGaleriaFactory = async (ctos = 1) => {
    let factory = [];

    for (let i = 1; i <= ctos; i++) {
        let galeria = {
            idEvento: 1,
            foto: "CEPA.jpg",
            createdAt: new Date(),
            updatedAt: new Date()
        };
        factory.push(galeria);
    }
    
    return Promise.all(factory);
};

module.exports = {
    eventoGaleriaFactory
};