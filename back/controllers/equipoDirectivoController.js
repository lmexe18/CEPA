'use strict';

const { response } = require('express');
const ConexionEquipoDirectivo = require('../database/conexionEquipoDirectivo');

const obtenerEquiposDirectivos = async (req, res = response) => {
    const conexion = new ConexionEquipoDirectivo();

    try {
        const equiposDirectivos = await conexion.getEquiposDirectivos();
        res.status(200).json(equiposDirectivos);
    } catch (err) {
        res.status(404).json({
            'msg': 'No se han encontrado registros',
            'error': err.message
        });
    }
}

const obtenerEquipoDirectivoPorId = async (req, res = response) => {
    const conexion = new ConexionEquipoDirectivo();

    try {
        const equipoDirectivo = await conexion.getEquipoDirectivoPorId(req.params.id);
        res.status(200).json(equipoDirectivo);
    } catch (err) {
        res.status(404).json({
            'msg': 'No se ha encontrado el registro',
            'error': err.message
        });
    }
}

const crearEquipoDirectivo = async (req, res = response) => {
    const conexion = new ConexionEquipoDirectivo();

    try {
        const equipoDirectivo = await conexion.postEquipoDirectivo(req.body);
        res.status(201).json(equipoDirectivo);
    } catch (err) {
        res.status(400).json({
            'msg': 'Error en el registro',
            'error': err.message
        });
    }
}

const actualizarEquipoDirectivo = async (req, res = response) => {
    const conexion = new ConexionEquipoDirectivo();

    try {
        const equipoDirectivo = await conexion.updateEquipoDirectivo(req.params.id, req.body);
        res.status(200).json(equipoDirectivo);
    } catch (err) {
        res.status(404).json({
            'msg': 'Error al actualizar el equipo directivo',
            'error': err.message
        });
    }
}

const borrarEquipoDirectivo = async (req, res = response) => {
    const conexion = new ConexionEquipoDirectivo();

    try {
        const equipoDirectivo = await conexion.deleteEquipoDirectivo(req.params.id);
        res.status(200).json(equipoDirectivo);
    } catch (err) {
        res.status(404).json({
            'msg': 'Error al eliminar el equipo directivo',
            'error': err.message
        });
    }
}

module.exports = {
    obtenerEquiposDirectivos,
    obtenerEquipoDirectivoPorId,
    crearEquipoDirectivo,
    actualizarEquipoDirectivo,
    borrarEquipoDirectivo
};