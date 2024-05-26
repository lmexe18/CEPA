const { response, request } = require('express');
const ConexionAsignatura = require('../database/conexionAsignatura');

const obtenerAsignaturas = (req, res = response) => {
    const conx = new ConexionAsignatura();

    conx.getAsignaturas()
        .then((asignaturas) => {
            res.status(200).json(asignaturas);
        })
        .catch((err) => {
            res.status(404).json({
                'msg': 'No se han encontrado registros',
                'error': err
            });
        });
}

const obtenerAsignaturaPorId = (req, res = response) => {
    const conx = new ConexionAsignatura();

    conx.getAsignaturaPorId(req.params.id)
        .then((asignatura) => {
            res.status(200).json(asignatura);
        })
        .catch((err) => {
            res.status(404).json({
                'msg': 'No se ha encontrado el registro',
                'error': err
            });
        });
}

const subirAsignatura = (req = request, res = response) => {
    const conx = new ConexionAsignatura();

    conx.postAsignatura(req.body)
        .then((asignatura) => {
            res.status(200).json({ asignatura });
        })
        .catch((err) => {
            res.status(404).json({
                'msg': 'No se ha podido subir la asignatura',
                'error': err
            });
        });
}

const actualizarAsignatura = (req, res = response) => {
    const conx = new ConexionAsignatura();

    conx.updateAsignatura(req.params.id, req.body)
        .then((asignatura) => {
            res.status(200).json(asignatura);
        })
        .catch((err) => {
            res.status(404).json({
                'msg': 'No se ha podido actualizar la asignatura',
                'error': err
            });
        });
}

const borrarAsignatura = (req, res = response) => {
    const conx = new ConexionAsignatura();

    conx.deleteAsignatura(req.params.id)
        .then((asignatura) => {
            res.status(200).json(asignatura);
        })
        .catch((err) => {
            res.status(404).json({
                'msg': 'No se ha podido eliminar la asignatura',
                'error': err
            });
        });
}

module.exports = {
    obtenerAsignaturas,
    obtenerAsignaturaPorId,
    subirAsignatura,
    actualizarAsignatura,
    borrarAsignatura
}