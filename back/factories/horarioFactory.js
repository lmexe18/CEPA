
const horarioFactory = async (ctos = 1) => {
    let factory = [];

    let horaInicio = new Date()
    let horaFin = new Date(horaInicio.getTime())
    horaFin.setHours(horaInicio.getHours() + 1)

    let dias = ['LUNES', 'MARTES', 'MIERCOLES', 'JUEVES', 'VIERNES', 'SABADO', 'DOMINGO']

    for (let i = 1; i <= ctos; i++) {
        let diaAleatorio = dias[Math.floor(Math.random() * dias.length)];

        let horario = {
            horaInicio: horaInicio,
            horaFin: horaFin,
            dia: diaAleatorio,
            idAula: i,
            idAsignatura: i,
            idCurso: i,
            createdAt: new Date(),
            updatedAt: new Date()
        };
        factory.push(horario);
    }
    return Promise.all(factory);
};

module.exports = {
    horarioFactory
};
