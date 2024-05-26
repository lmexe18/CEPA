const turnoFactory = async (ctos = 4) => {
    let factory = [];
    for (let i = 1; i <= ctos; i++) {
        let turno = {
            nombre: `Turno ${i}`,
            createdAt: new Date(),
            updatedAt: new Date()
        };
        factory.push(turno);
    }
    return Promise.all(factory);
};

module.exports = {
    turnoFactory
};
