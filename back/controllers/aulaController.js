'use strict';

const { response, request } = require('express');
const ConexionAula = require('../database/conexionAula');

const obtenerAulas = async (req, res = response) => {
    const conexion = new ConexionAula();

    try {
        const aulas = await conexion.getAulas();
        res.status(200).json(aulas);
    } catch (err) {
        res.status(404).json({
            'msg': 'No se han encontrado registros',
            'error': err
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
            'error': err
        });
    }
}

const obtenerAulaPorNombre = async (req, res = response) => {
    const conexion = new ConexionAula();

    try {
        const aula = await conexion.getAulaPorNombre(req.params.nombre);
        res.status(200).json(aula);
    } catch (err) {
        res.status(404).json({
            'msg': 'No se ha encontrado el aula con el nombre especificado',
            'error': err
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
            'error': err
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
            'error': err
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
            'error': err
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
