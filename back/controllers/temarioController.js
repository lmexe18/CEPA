const { response, request } = require('express');
const ConexionTemario = require('../database/conexionTemario');

const obtenerTemarios = async (req, res = response) => {
    const conx = new ConexionTemario();
    try {
        const temarios = await conx.getTemarios();
        res.status(200).json(temarios);
    } catch (err) {
        res.status(404).json({
            msg: 'No se han encontrado registros',
            error: err.message
        });
    }
};

const obtenerTemarioPorId = async (req, res = response) => {
    const conx = new ConexionTemario();
    try {
        const temario = await conx.getTemarioPorId(req.params.id);
        res.status(200).json(temario);
    } catch (err) {
        res.status(404).json({
            msg: 'No se ha encontrado el registro',
            error: err.message
        });
    }
};

const crearTemario = async (req = request, res = response) => {
    const conx = new ConexionTemario();
    try {
        const temario = await conx.postTemario(req.body);
        res.status(201).json(temario);
    } catch (err) {
        res.status(400).json({
            msg: 'No se ha podido crear el temario',
            error: err.message
        });
    }
};

const actualizarTemario = async (req, res = response) => {
    const conx = new ConexionTemario();
    try {
        const temario = await conx.putTemario(req.params.id, req.body);
        res.status(202).json(temario);
    } catch (err) {
        res.status(400).json({
            msg: 'No se ha podido actualizar el temario',
            error: err.message
        });
    }
};

const eliminarTemario = async (req, res = response) => {
    const conx = new ConexionTemario();
    try {
        const resultado = await conx.deleteTemario(req.params.id);
        res.status(202).json(resultado);
    } catch (err) {
        res.status(404).json({
            msg: 'No se ha podido borrar el temario',
            error: err.message
        });
    }
};

module.exports = {
    obtenerTemarios,
    obtenerTemarioPorId,
    crearTemario,
    actualizarTemario,
    eliminarTemario
};