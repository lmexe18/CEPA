const { AulaHorario } = require('../models');

const aulaHorarioFactory = async (ctos = 4) => {
    let factory = [];
    for (let i = 0; i < ctos; i++) {
        let aulaHorario = {
            idAula: i,
            idFranja: i,
            reserva: Math.random() < 0.5 ? true : false,
            idUsuario: i, 
            activo: Math.random() < 0.5 ? true : false,
            createdAt: new Date(),
            updatedAt: new Date()
        };
        factory.push(aulaHorario);
    }
    return AulaHorario.bulkCreate(factory);
};

module.exports = {
    aulaHorarioFactory
};
