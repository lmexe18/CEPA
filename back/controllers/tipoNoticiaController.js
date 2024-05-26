const { response, request } = require('express');
const ConexionTipoNoticia = require('../database/conexionTipoNoticia');

const obtenerTiposNoticias = async (req, res = response) => {
    const conx = new ConexionTipoNoticia();
    try {
        const tiposNoticias = await conx.getTiposNoticias();
        res.status(200).json(tiposNoticias);
    } catch (err) {
        res.status(404).json({
            msg: 'No se han encontrado registros',
            error: err.message
        });
    }
};

const obtenerTipoNoticiaPorId = async (req, res = response) => {
    const conx = new ConexionTipoNoticia();
    try {
        const tipoNoticia = await conx.getTipoNoticiaPorId(req.params.id);
        res.status(200).json(tipoNoticia);
    } catch (err) {
        res.status(404).json({
            msg: 'No se ha encontrado el registro',
            error: err.message
        });
    }
};

const crearTipoNoticia = async (req = request, res = response) => {
    const conx = new ConexionTipoNoticia();
    try {
        const tipoNoticia = await conx.postTipoNoticia(req.body);
        res.status(201).json(tipoNoticia);
    } catch (err) {
        res.status(400).json({
            msg: 'No se ha podido crear el tipo de noticia',
            error: err.message
        });
    }
};

const actualizarTipoNoticia = async (req, res = response) => {
    const conx = new ConexionTipoNoticia();
    try {
        const tipoNoticia = await conx.putTipoNoticia(req.params.id, req.body);
        res.status(202).json(tipoNoticia);
    } catch (err) {
        res.status(400).json({
            msg: 'No se ha podido actualizar el tipo de noticia',
            error: err.message
        });
    }
};

const eliminarTipoNoticia = async (req, res = response) => {
    const conx = new ConexionTipoNoticia();
    try {
        const resultado = await conx.deleteTipoNoticia(req.params.id);
        res.status(202).json(resultado);
    } catch (err) {
        res.status(404).json({
            msg: 'No se ha podido borrar el tipo de noticia',
            error: err.message
        });
    }
};

module.exports = {
    obtenerTiposNoticias,
    obtenerTipoNoticiaPorId,
    crearTipoNoticia,
    actualizarTipoNoticia,
    eliminarTipoNoticia
};