'use strict';

const { response } = require('express');
const ConexionContacto = require('../database/conexionContacto');

const obtenerContactos = async (req, res = response) => {
    const conexion = new ConexionContacto();

    try {
        const contactos = await conexion.getContactos();
        res.status(200).json(contactos);
    } catch (err) {
        res.status(404).json({
            'msg': 'No se han encontrado registros',
            'error': err.message
        });
    }
}

const obtenerContactoPorId = async (req, res = response) => {
    const conexion = new ConexionContacto();

    try {
        const contacto = await conexion.getContactoPorId(req.params.id);
        res.status(200).json(contacto);
    } catch (err) {
        res.status(404).json({
            'msg': 'No se ha encontrado el registro',
            'error': err.message
        });
    }
}

const crearContacto = async (req, res = response) => {
    const conexion = new ConexionContacto();

    try {
        const contacto = await conexion.postContacto(req.body);
        res.status(201).json(contacto);
    } catch (err) {
        res.status(400).json({
            'msg': 'Error en el registro',
            'error': err.message
        });
    }
}

const actualizarContacto = async (req, res = response) => {
    const conexion = new ConexionContacto();

    try {
        const contacto = await conexion.updateContacto(req.params.id, req.body);
        res.status(200).json(contacto);
    } catch (err) {
        res.status(404).json({
            'msg': 'Error al actualizar el contacto',
            'error': err.message
        });
    }
}

const borrarContacto = async (req, res = response) => {
    const conexion = new ConexionContacto();

    try {
        const contacto = await conexion.deleteContacto(req.params.id);
        res.status(200).json(contacto);
    } catch (err) {
        res.status(404).json({
            'msg': 'Error al eliminar el contacto',
            'error': err.message
        });
    }
}

module.exports = {
    obtenerContactos,
    obtenerContactoPorId,
    crearContacto,
    actualizarContacto,
    borrarContacto
};