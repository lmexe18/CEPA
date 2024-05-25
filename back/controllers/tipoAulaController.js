const { response, request } = require('express');
const ConexionTipoAula = require('../database/conexionTipoAula');

const obtenerTiposAulas = async (req, res = response) => {
    const conx = new ConexionTipoAula();
    try {
        const tiposAulas = await conx.getTiposAulas();
        res.status(200).json(tiposAulas);
    } catch (err) {
        res.status(404).json({
            msg: 'No se han encontrado registros',
            error: err.message
        });
    }
};

const obtenerTipoAulaPorId = async (req, res = response) => {
    const conx = new ConexionTipoAula();
    try {
        const tipoAula = await conx.getTipoAulaPorId(req.params.id);
        res.status(200).json(tipoAula);
    } catch (err) {
        res.status(404).json({
            msg: 'No se ha encontrado el registro',
            error: err.message
        });
    }
};

const crearTipoAula = async (req = request, res = response) => {
    const conx = new ConexionTipoAula();
    try {
        const tipoAula = await conx.postTipoAula(req.body);
        res.status(201).json(tipoAula);
    } catch (err) {
        res.status(400).json({
            msg: 'No se ha podido crear el tipo de aula',
            error: err.message
        });
    }
};

const actualizarTipoAula = async (req, res = response) => {
    const conx = new ConexionTipoAula();
    try {
        const tipoAula = await conx.putTipoAula(req.params.id, req.body);
        res.status(202).json(tipoAula);
    } catch (err) {
        res.status(400).json({
            msg: 'No se ha podido actualizar el tipo de aula',
            error: err.message
        });
    }
};

const eliminarTipoAula = async (req, res = response) => {
    const conx = new ConexionTipoAula();
    try {
        const resultado = await conx.deleteTipoAula(req.params.id);
        res.status(202).json(resultado);
    } catch (err) {
        res.status(404).json({
            msg: 'No se ha podido borrar el tipo de aula',
            error: err.message
        });
    }
};

module.exports = {
    obtenerTiposAulas,
    obtenerTipoAulaPorId,
    crearTipoAula,
    actualizarTipoAula,
    eliminarTipoAula
};