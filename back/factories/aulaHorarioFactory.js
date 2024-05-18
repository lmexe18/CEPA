
const aulaHorarioFactory = async (ctos = 1) => {
    let factory = [];
    for (let i = 1; i <= ctos; i++) {
        let aulaHorario = {
            idAula: i,
            idRangoHorario: i,
            reserva: Math.random() < 0.5 ? true : false,
            idUsuario: 3, 
            activo: Math.random() < 0.5 ? true : false,
            createdAt: new Date(),
            updatedAt: new Date()
        };
        factory.push(aulaHorario);
    }
    return Promise.all(factory);
};

module.exports = {
    aulaHorarioFactory
};
