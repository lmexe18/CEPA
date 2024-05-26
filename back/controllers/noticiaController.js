'use strict';

const { response } = require('express');
const ConexionNoticia = require('../database/conexionNoticia');

const obtenerNoticias = async (req, res = response) => {
    const conexion = new ConexionNoticia();

    try {
        const noticias = await conexion.getNoticias();
        res.status(200).json(noticias);
    } catch (err) {
        res.status(404).json({
            'msg': 'No se han encontrado registros',
            'error': err.message
        });
    }
};

const obtenerNoticiaPorId = async (req, res = response) => {
    const conexion = new ConexionNoticia();

    try {
        const noticia = await conexion.getNoticiaPorId(req.params.id);
        res.status(200).json(noticia);
    } catch (err) {
        res.status(404).json({
            'msg': 'No se ha encontrado el registro',
            'error': err.message
        });
    }
};

const obtenerNoticiasPorTipo = async (req, res = response) => {
    const conexion = new ConexionNoticia();

    try {
        const noticias = await conexion.getNoticiasPorTipo(req.params.tipo);
        res.status(200).json(noticias);
    } catch (err) {
        res.status(404).json({
            'msg': 'No se han encontrado registros',
            'error': err.message
        });
    }
};

const crearNoticia = async (req, res = response) => {
    const conexion = new ConexionNoticia();

    try {
        const noticia = await conexion.postNoticia(req.body);
        res.status(201).json(noticia);
    } catch (err) {
        res.status(400).json({
            'msg': 'Error en el registro',
            'error': err.message
        });
    }
};

const actualizarNoticia = async (req, res = response) => {
    const conexion = new ConexionNoticia();

    try {
        const noticia = await conexion.updateNoticia(req.params.id, req.body);
        res.status(200).json(noticia);
    } catch (err) {
        res.status(404).json({
            'msg': 'Error al actualizar la noticia',
            'error': err.message
        });
    }
};

const borrarNoticia = async (req, res = response) => {
    const conexion = new ConexionNoticia();

    try {
        await conexion.deleteNoticia(req.params.id);
        res.status(200).json({ msg: 'Noticia eliminada correctamente' });
    } catch (err) {
        res.status(404).json({
            'msg': 'Error al eliminar la noticia',
            'error': err.message
        });
    }
};

module.exports = {
    obtenerNoticias,
    obtenerNoticiaPorId,
    obtenerNoticiasPorTipo,
    crearNoticia,
    actualizarNoticia,
    borrarNoticia
};