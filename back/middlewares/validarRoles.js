const { response, request } = require('express');

const esAdmin = (req, res, next) => {
    if (!req.uid) {
        return res.status(500).json({ 'msg': 'No es posible el acceso como administrador.' })
    }

    if (req.abilities.includes('Administrador')) {
        next()
    } else {
        return res.status(401).json('Acceso no autorizado')
    }
}

const esJefeDeEstudios = (req, res, next) => {
    if (!req.uid) {
        return res.status(500).json({ 'msg': 'No es posible el acceso como jefe de estudios.' })
    }

    if (req.abilities.includes('Jefe de estudios')) {
        next()
    } else {
        return res.status(401).json('Acceso no autorizado')
    }
}

const esProfesor = (req, res, next) => {
    if (!req.uid) {
        return res.status(500).json({ 'msg': 'No es posible el acceso como profesor.' })
    }
    if (req.abilities.includes('Profesor')) {
        next()
    } else {
        return res.status(401).json('Acceso no autorizado')
    }
}

module.exports = {
    esAdmin,
    esJefeDeEstudios,
    esProfesor
}