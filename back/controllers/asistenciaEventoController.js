'use strict';
const { response, request } = require('express');
const ConexionAsistenciaEvento = require('../database/conexionAsistenciaEvento');

const obtenerAsistenciasEventos = async (req, res = response) => {
    const conx = new ConexionAsistenciaEvento();

    try {
        const asistenciasEventos = await conx.getAsistenciasEventos();
        res.status(200).json(asistenciasEventos);
    } catch (err) {
        res.status(404).json({ 
            'msg': 'No se han encontrado registros',
            'error': err
        });
    }
}

const obtenerAsistenciaEventoPorId = async (req, res = response) => {
    const conx = new ConexionAsistenciaEvento();

    try {
        const asistenciaEvento = await conx.getAsistenciaEventoPorId(req.params.id);
        res.status(200).json(asistenciaEvento);
    } catch (err) {
        res.status(404).json({ 
            'msg': 'No se ha encontrado el registro',
            'error': err
        });
    }
}

const obtenerAsistenciasEventosDeUsuario = async (req, res = response) => {
    const conx = new ConexionAsistenciaEvento();

    try {
        const asistenciasEventos = await conx.getAsistenciasEventosDeUsuario(req.params.userId);
        res.status(200).json(asistenciasEventos);
    } catch (err) {
        res.status(404).json({ 
            'msg': 'No se han encontrado asistencias para el usuario introducido',
            'error': err
        });
    }
}

const obtenerUsuariosEvento = async (req, res = response) => {
    const conx = new ConexionAsistenciaEvento();
    const eventoId = req.params.eventoId;

    try {
        const usuariosEvento = await conx.getUsuariosEvento(eventoId);
        res.status(200).json(usuariosEvento);
    } catch (err) {
        res.status(404).json({ 
            'msg': 'No se han encontrado usuarios para el evento introducido',
            'error': err
        });
    }
}

const obtenerAsistenciaEventoUsuario = async (req, res = response) => {
    const conx = new ConexionAsistenciaEvento();

    try {
        const asistenciaEventoUsuario = await conx.getAsistenciaEventoUsuario(req.params.eventoId, req.params.userId);
        res.status(200).json(asistenciaEventoUsuario);
    } catch (err) {
        res.status(404).json({ 
            'msg': 'No se ha encontrado ninguna asistencia para el usuario en el evento especificado',
            'error': err
        });
    }
}

const subirAsistenciaEvento = async (req = request, res = response) => {
    const conx = new ConexionAsistenciaEvento();

    try {
        const asistenciaEvento = await conx.postAsistenciaEvento(req.body);
        res.status(200).json(asistenciaEvento);
    } catch (err) {
        res.status(404).json({ 
            'msg': 'Error al crear la asistencia al evento',
            'error': err
        });
    }
}

const actualizarAsistenciaEvento = async (req, res = response) => {
    const conx = new ConexionAsistenciaEvento();

    try {
        const asistenciaEvento = await conx.updateAsistenciaEvento(req.params.id, req.body);
        res.status(200).json(asistenciaEvento);
    } catch (err) {
        res.status(404).json({ 
            'msg': 'Error al actualizar la asistencia al evento',
            'error': err
        });
    }
}

const borrarAsistenciaEvento = async (req, res = response) => {
    const conx = new ConexionAsistenciaEvento();

    try {
        const asistenciaEvento = await conx.deleteAsistencia(req.params.id);
        res.status(200).json(asistenciaEvento);
    } catch (err) {
        res.status(404).json({ 
            'msg': 'Error al eliminar la asistencia al evento',
            'error': err
        });
    }
}

module.exports = {
    obtenerAsistenciasEventos,
    obtenerAsistenciaEventoPorId,
    obtenerAsistenciasEventosDeUsuario,
    obtenerUsuariosEvento,
    obtenerAsistenciaEventoUsuario,
    subirAsistenciaEvento,
    actualizarAsistenciaEvento,
    borrarAsistenciaEvento
};