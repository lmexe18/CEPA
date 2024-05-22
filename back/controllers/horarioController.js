'use strict';

const { response } = require('express');
const ConexionHorario = require('../database/conexionHorario');

const obtenerHorarios = async (req, res = response) => {
    const conexion = new ConexionAulaHorario();

    try {
        const horarios = await conexion.getHorarios();
        res.status(200).json(horarios);
    } catch (err) {
        res.status(404).json({
            'msg': 'No se han encontrado registros',
            'error': err.message
        });
    }
}

const obtenerHorariosDeAula = async (req, res = response) => {
    const conexion = new ConexionHorario();

    try {
        const horarios = await conexion.getHorariosDeAula(req.params.id);
        res.status(200).json(horarios);
    } catch (err) {
        res.status(404).json({
            'msg': 'No se han encontrado registros',
            'error': err.message
        });
    }
}

const obtenerHorarioPorId = async (req, res = response) => {
    const conexion = new ConexionHorario();

    try {
        const horario = await conexion.getHorarioPorId(req.params.id);
        res.status(200).json(horario);
    } catch (err) {
        res.status(404).json({
            'msg': 'No se ha encontrado el registro',
            'error': err.message
        });
    }
}

const obtenerHorarioDeCurso = async (req, res = response) => {
    const conexion = new ConexionHorario();

    try {
        const horarios = await conexion.getHorarioDeCurso(req.params.id);
        res.status(200).json(horarios);
    } catch (err) {
        res.status(404).json({
            'msg': 'No se han encontrado registros',
            'error': err.message
        });
    }
}

const crearHorario = async (req, res = response) => {
    const conexion = new ConexionHorario();

    try {
        const horario = await conexion.postHorario(req.body);
        res.status(201).json(horario);
    } catch (err) {
        res.status(400).json({
            'msg': 'Error en el registro',
            'error': err.message
        });
    }
}

const actualizarHorario = async (req, res = response) => {
    const conexion = new ConexionHorario();

    try {
        await conexion.updateHorario(req.params.id, req.body);
        res.status(200).json({
            'msg': 'Horario actualizado correctamente'
        });
    } catch (err) {
        res.status(404).json({
            'msg': 'Error al actualizar el horario',
            'error': err.message
        });
    }
}

const borrarHorario = async (req, res = response) => {
    const conexion = new ConexionHorario();

    try {
        await conexion.deleteHorario(req.params.id);
        res.status(200).json({
            'msg': 'Horario eliminado correctamente'
        });
    } catch (err) {
        res.status(404).json({
            'msg': 'Error al eliminar el horario',
            'error': err.message
        });
    }
}

module.exports = {
    obtenerHorarios,
    obtenerHorariosDeAula,
    obtenerHorarioPorId,
    obtenerHorarioDeCurso,
    crearHorario,
    actualizarHorario,
    borrarHorario
};