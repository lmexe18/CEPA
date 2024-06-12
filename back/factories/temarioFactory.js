const temarioFactory = async (ctos = 4) => {
    let factory = [];
    for (let i = 1; i <= ctos; i++) {
        let temario = {
            tema: `Tema ${i}`,
            link: `Link ${i}`,
            idAsignatura: i,
            visibilidad: Math.random() < 0.5 ? true : false,
            activo: Math.random() < 0.5 ? true : false,
            createdAt: new Date(),
            updatedAt: new Date()
        };
        factory.push(temario);
    }
    return Promise.all(factory);
};

module.exports = {
    temarioFactory
};
