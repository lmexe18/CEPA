const { response, request } = require('express');
const EventoGaleriaConexion = require('../database/conexionEventoGaleria');

const obtenerEventoGalerias = (req, res = response) => {
    const conx = new EventoGaleriaConexion();

    conx.getEventoGalerias()
        .then((galerias) => {
            res.status(200).json(galerias);
        })
        .catch((err) => {
            res.status(404).json({ 
                'msg': 'No se han encontrado registros',
                'error':err.message
             });
        });
}

const obtenerEventoGaleriaPorId = (req, res = response) => {
    const conx = new EventoGaleriaConexion();

    conx.getEventoGaleriaPorId(req.params.id)
        .then((galeria) => {
            res.status(200).json(galeria);
        })
        .catch((err) => {
            res.status(404).json({ 
                'msg': 'No se ha encontrado el registro',
                'error':err.message
             });
        });
}

const subirEventoGaleria = (req = request, res = response) => {
    const conx = new EventoGaleriaConexion();

    conx.postEventoGaleria(req.body)
        .then((galeria) => {
            res.status(200).json(galeria);
        })
        .catch((err) => {
            res.status(404).json({
                'msg': 'No se ha podido subir el registro',
                'error': err.message
            });
        });
}

const borrarEventoGaleria = (req, res = response) => {
    const conx = new EventoGaleriaConexion();

    conx.deleteEventoGaleria(req.params.id)
        .then((galeria) => {
            res.status(200).json(galeria);
        })
        .catch((err) => {
            res.status(404).json({
                'msg': 'No se ha podido borrar el registro',
                'error': err.message
            });
        });
}

const obtenerGaleriaDeEvento = (req, res) => {
    const conx = new EventoGaleriaConexion()
    
    conx.getGaleriaDeEvento(req.params.id)
    .then((galeria) => {
        res.status(200).json(galeria);
    })
    .catch((err) => {
        res.status(404).json({
            'msg': 'No se ha podido obtener la galeria del evento',
            'error': err.message
        });
    });
}

module.exports = {
    obtenerEventoGalerias,
    obtenerEventoGaleriaPorId,
    subirEventoGaleria,
    borrarEventoGaleria,
    obtenerGaleriaDeEvento
}
