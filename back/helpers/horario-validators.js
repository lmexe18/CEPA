const { response, request } = require('express')
const ConexionHorarios = require('../database/conexionHorario')

const aulaHorarioExiste = (idHorario) => {
    return new Promise((resolve, reject) => {
        const conx = new ConexionHorarios()
        conx.getHorarioPorId(idHorario)
        .then(msg => {
            resolve(true)
        })
        .catch(err => {
            reject(new Error('El horario seleccionado no existe'))
        })
    })
}

module.exports = { 
    aulaHorarioExiste,
}