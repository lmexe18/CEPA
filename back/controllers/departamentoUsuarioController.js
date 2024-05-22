'use strict';

const { response } = require('express');
const ConexionDepartamentoUsuario = require('../database/conexionDepartamentoUsuario');

const obtenerDepartamentoUsuarios = async (req, res = response) => {
    const conexion = new ConexionDepartamentoUsuario();

    try {
        const departamentoUsuarios = await conexion.getDepartamentoUsuarios();
        res.status(200).json(departamentoUsuarios);
    } catch (err) {
        res.status(404).json({
            'msg': 'No se han encontrado registros',
            'error': err.message
        });
    }
}

const obtenerDepartamentoUsuarioPorId = async (req, res = response) => {
    const conexion = new ConexionDepartamentoUsuario();

    try {
        const departamentoUsuario = await conexion.getDepartamentoUsuarioPorId(req.params.id);
        res.status(200).json(departamentoUsuario);
    } catch (err) {
        res.status(404).json({
            'msg': 'No se ha encontrado el registro',
            'error': err.message
        });
    }
}

const crearDepartamentoUsuario = async (req, res = response) => {
    const conexion = new ConexionDepartamentoUsuario();

    try {
        const departamentoUsuario = await conexion.postDepartamentoUsuario(req.body);
        res.status(201).json(departamentoUsuario);
    } catch (err) {
        res.status(400).json({
            'msg': 'Error en el registro',
            'error': err.message
        });
    }
}

const borrarDepartamentoUsuario = async (req, res = response) => {
    const conexion = new ConexionDepartamentoUsuario();

    try {
        const departamentoUsuario = await conexion.deleteDepartamentoUsuario(req.params.id);
        res.status(200).json(departamentoUsuario);
    } catch (err) {
        res.status(404).json({
            'msg': 'Error al eliminar el departamento_usuario',
            'error': err.message
        });
    }
}

module.exports = {
    obtenerDepartamentoUsuarios,
    obtenerDepartamentoUsuarioPorId,
    crearDepartamentoUsuario,
    borrarDepartamentoUsuario
};