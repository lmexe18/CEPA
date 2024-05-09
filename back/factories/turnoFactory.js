const { Turno } = require('../models');
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
    return Turno.bulkCreate(factory);
};

module.exports = {
    turnoFactory
};
