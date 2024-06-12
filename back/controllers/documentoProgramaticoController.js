'use strict';

const { response } = require('express');
const ConexionDocumentoProgramatico = require('../database/conexionDocumentoProgramatico');

const obtenerDocumentosProgramaticos = async (req, res = response) => {
    const conexion = new ConexionDocumentoProgramatico();

    try {
        const documentosProgramaticos = await conexion.getDocumentosProgramaticos();
        res.status(200).json(documentosProgramaticos);
    } catch (err) {
        res.status(404).json({
            'msg': 'No se han encontrado registros',
            'error': err.message
        });
    }
}

const obtenerDocumentoProgramaticoPorId = async (req, res = response) => {
    const conexion = new ConexionDocumentoProgramatico();

    try {
        const documentoProgramatico = await conexion.getDocumentoProgramaticoPorId(req.params.id);
        res.status(200).json(documentoProgramatico);
    } catch (err) {
        res.status(404).json({
            'msg': 'No se ha encontrado el registro',
            'error': err.message
        });
    }
}

const crearDocumentoProgramatico = async (req, res = response) => {
    const conexion = new ConexionDocumentoProgramatico();

    try {
        const documentoProgramatico = await conexion.postDocumentoProgramatico(req.body);
        res.status(201).json(documentoProgramatico);
    } catch (err) {
        res.status(400).json({
            'msg': 'Error en el registro',
            'error': err.message
        });
    }
}

const actualizarDocumentoProgramatico = async (req, res = response) => {
    const conexion = new ConexionDocumentoProgramatico();

    try {
        const documentoProgramatico = await conexion.updateDocumentoProgramatico(req.params.id, req.body);
        res.status(200).json(documentoProgramatico);
    } catch (err) {
        res.status(404).json({
            'msg': 'Error al actualizar el documento programático',
            'error': err.message
        });
    }
}

const borrarDocumentoProgramatico = async (req, res = response) => {
    const conexion = new ConexionDocumentoProgramatico();

    try {
        const documentoProgramatico = await conexion.deleteDocumentoProgramatico(req.params.id);
        res.status(200).json(documentoProgramatico);
    } catch (err) {
        res.status(404).json({
            'msg': 'Error al eliminar el documento programático',
            'error': err.message
        });
    }
}

module.exports = {
    obtenerDocumentosProgramaticos,
    obtenerDocumentoProgramaticoPorId,
    crearDocumentoProgramatico,
    actualizarDocumentoProgramatico,
    borrarDocumentoProgramatico
};