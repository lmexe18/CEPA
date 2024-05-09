//Jaime

const { RangoHorario } = require('../models/rangoHorario')
const faker = require('@faker-js/faker')

const rangoHorarioFactory = async (ctos = 1) => {
    let factory = []

    for (let i = 1; i <= ctos; i++) {
        let horaInicio = new Date()
        let horaFin = new Date(horaInicio.getTime())
        horaFin.setHours(horaInicio.getHours() + 1)

        let aulaFranja = {
            idTurno: 1,
            horaInicio: horaInicio,
            horaFin: horaFin,
            createdAt: new Date(),
            updatedAt: new Date()
        }
        factory.push(aulaFranja)
    }
    return factory
}

module.exports = {
    rangoHorarioFactory
}