const { response, request } = require('express');
const ConexionTipoCurso = require('../database/conexionTipoCurso');

const obtenerTiposCursos = async (req, res = response) => {
    const conx = new ConexionTipoCurso();
    try {
        const tiposCursos = await conx.getTiposCursos();
        res.status(200).json(tiposCursos);
    } catch (err) {
        res.status(404).json({
            msg: 'No se han encontrado registros',
            error: err.message
        });
    }
};

const obtenerTipoCursoPorId = async (req, res = response) => {
    const conx = new ConexionTipoCurso();
    try {
        const tipoCurso = await conx.getTipoCursoPorId(req.params.id);
        res.status(200).json(tipoCurso);
    } catch (err) {
        res.status(404).json({
            msg: 'No se ha encontrado el registro',
            error: err.message
        });
    }
};

const crearTipoCurso = async (req = request, res = response) => {
    const conx = new ConexionTipoCurso();
    try {
        const tipoCurso = await conx.postTipoCurso(req.body);
        res.status(201).json(tipoCurso);
    } catch (err) {
        res.status(400).json({
            msg: 'No se ha podido crear el tipo de curso',
            error: err.message
        });
    }
};

const actualizarTipoCurso = async (req, res = response) => {
    const conx = new ConexionTipoCurso();
    try {
        const tipoCurso = await conx.putTipoCurso(req.params.id, req.body);
        res.status(202).json(tipoCurso);
    } catch (err) {
        res.status(400).json({
            msg: 'No se ha podido actualizar el tipo de curso',
            error: err.message
        });
    }
};

const eliminarTipoCurso = async (req, res = response) => {
    const conx = new ConexionTipoCurso();
    try {
        const resultado = await conx.deleteTipoCurso(req.params.id);
        res.status(202).json(resultado);
    } catch (err) {
        res.status(404).json({
            msg: 'No se ha podido borrar el tipo de curso',
            error: err.message
        });
    }
};

module.exports = {
    obtenerTiposCursos,
    obtenerTipoCursoPorId,
    crearTipoCurso,
    actualizarTipoCurso,
    eliminarTipoCurso
};