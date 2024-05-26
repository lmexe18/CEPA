const { response, request } = require('express');
const ConexionTipoEvento = require('../database/conexionTipoEvento');

const obtenerTiposEventos = async (req, res = response) => {
    const conx = new ConexionTipoEvento();
    try {
        const tiposEventos = await conx.getTiposEventos();
        res.status(200).json(tiposEventos);
    } catch (err) {
        res.status(404).json({
            msg: 'No se han encontrado registros',
            error: err.message
        });
    }
};

const obtenerTipoEventoPorId = async (req, res = response) => {
    const conx = new ConexionTipoEvento();
    try {
        const tipoEvento = await conx.getTipoEventoPorId(req.params.id);
        res.status(200).json(tipoEvento);
    } catch (err) {
        res.status(404).json({
            msg: 'No se ha encontrado el registro',
            error: err.message
        });
    }
};

const crearTipoEvento = async (req = request, res = response) => {
    const conx = new ConexionTipoEvento();
    try {
        const tipoEvento = await conx.postTipoEvento(req.body);
        res.status(201).json(tipoEvento);
    } catch (err) {
        res.status(400).json({
            msg: 'No se ha podido crear el tipo de evento',
            error: err.message
        });
    }
};

const actualizarTipoEvento = async (req, res = response) => {
    const conx = new ConexionTipoEvento();
    try {
        const tipoEvento = await conx.putTipoEvento(req.params.id, req.body);
        res.status(202).json(tipoEvento);
    } catch (err) {
        res.status(400).json({
            msg: 'No se ha podido actualizar el tipo de evento',
            error: err.message
        });
    }
};

const eliminarTipoEvento = async (req, res = response) => {
    const conx = new ConexionTipoEvento();
    try {
        const resultado = await conx.deleteTipoEvento(req.params.id);
        res.status(202).json(resultado);
    } catch (err) {
        res.status(404).json({
            msg: 'No se ha podido borrar el tipo de evento',
            error: err.message
        });
    }
};

module.exports = {
    obtenerTiposEventos,
    obtenerTipoEventoPorId,
    crearTipoEvento,
    actualizarTipoEvento,
    eliminarTipoEvento
};
