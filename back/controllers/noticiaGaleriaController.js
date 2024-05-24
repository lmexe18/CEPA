const { response, request } = require('express');
const NoticiaGaleriaConexion = require('../database/conexionNoticiaGaleria');

const obtenerNoticiaGalerias = (req, res = response) => {
    const conx = new NoticiaGaleriaConexion();

    conx.getNoticiaGalerias()
        .then((galerias) => {
            res.status(200).json(galerias);
        })
        .catch((err) => {
            res.status(404).json({ 
                'msg': 'No se han encontrado registros',
                'error': err.message
            });
        });
}

const obtenerNoticiaGaleriaPorId = (req, res = response) => {
    const conx = new NoticiaGaleriaConexion();

    conx.getNoticiaGaleriaPorId(req.params.id)
        .then((galeria) => {
            res.status(200).json(galeria);
        })
        .catch((err) => {
            res.status(404).json({ 
                'msg': 'No se ha encontrado el registro',
                'error': err.message
            });
        });
}

const subirNoticiaGaleria = (req = request, res = response) => {
    const conx = new NoticiaGaleriaConexion();

    conx.postNoticiaGaleria(req.body)
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

const borrarNoticiaGaleria = (req, res = response) => {
    const conx = new NoticiaGaleriaConexion();

    conx.deleteNoticiaGaleria(req.params.id)
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

const obtenerGaleriaDeNoticia = (req, res) => {
    const conx = new NoticiaGaleriaConexion();
    
    conx.getGaleriaDeNoticia(req.params.id)
    .then((galeria) => {
        res.status(200).json(galeria);
    })
    .catch((err) => {
        res.status(404).json({
            'msg': 'No se ha podido obtener la galeria de la noticia',
            'error': err.message
        });
    });
}

module.exports = {
    obtenerNoticiaGalerias,
    obtenerNoticiaGaleriaPorId,
    subirNoticiaGaleria,
    borrarNoticiaGaleria,
    obtenerGaleriaDeNoticia
}