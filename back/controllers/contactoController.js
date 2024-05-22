'use strict';

const { response } = require('express');
const ConexionAula = require('../database/conexionAula');

const obtenerAulas = async (req, res = response) => {
    const conexion = new ConexionAula();

    try {
        const aulas = await conexion.getAulas();
        res.status(200).json(aulas);
    } catch (err) {
        res.status(404).json({
            'msg': 'No se han encontrado registros',
            'error': err.message
        });
    }
}

const obtenerAulaPorId = async (req, res = response) => {
    const conexion = new ConexionAula();

    try {
        const aula = await conexion.getAulaPorId(req.params.id);
        res.status(200).json(aula);
    } catch (err) {
        res.status(404).json({
            'msg': 'No se ha encontrado el registro',
            'error': err.message
        });
    }
}

const crearAula = async (req, res = response) => {
    const conexion = new ConexionAula();

    try {
        const aula = await conexion.postAula(req.body);
        res.status(201).json(aula);
    } catch (err) {
        res.status(400).json({
            'msg': 'Error en el registro',
            'error': err.message
        });
    }
}

const actualizarAula = async (req, res = response) => {
    const conexion = new ConexionAula();

    try {
        const aula = await conexion.updateAula(req.params.id, req.body);
        res.status(200).json(aula);
    } catch (err) {
        res.status(404).json({
            'msg': 'Error al actualizar el aula',
            'error': err.message
        });
    }
}

const borrarAula = async (req, res = response) => {
    const conexion = new ConexionAula();

    try {
        const aula = await conexion.deleteAula(req.params.id);
        res.status(200).json(aula);
    } catch (err) {
        res.status(404).json({
            'msg': 'Error al eliminar el aula',
            'error': err.message
        });
    }
}

module.exports = {
    obtenerAulas,
    obtenerAulaPorId,
    obtenerAulaPorNombre,
    crearAula,
    actualizarAula,
    borrarAula
};