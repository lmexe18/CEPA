'use strict';

const { response } = require('express');
const ConexionDepartamento = require('../database/conexionDepartamento');

const obtenerDepartamentos = async (req, res = response) => {
    const conexion = new ConexionDepartamento();

    try {
        const departamentos = await conexion.getDepartamentos();
        res.status(200).json(departamentos);
    } catch (err) {
        res.status(404).json({
            'msg': 'No se han encontrado registros',
            'error': err.message
        });
    }
}

const obtenerDepartamentoPorId = async (req, res = response) => {
    const conexion = new ConexionDepartamento();

    try {
        const departamento = await conexion.getDepartamentoPorId(req.params.id);
        res.status(200).json(departamento);
    } catch (err) {
        res.status(404).json({
            'msg': 'No se ha encontrado el registro',
            'error': err.message
        });
    }
}

const obtenerDepartamentosPorJefe = async (req, res = response) => {
    const conexion = new ConexionDepartamento();

    try {
        const departamentos = await conexion.getDepartamentosPorJefe(req.params.idJefeDepartamento);
        res.status(200).json(departamentos);
    } catch (err) {
        res.status(404).json({
            'msg': 'No se han encontrado registros',
            'error': err.message
        });
    }
}

const crearDepartamento = async (req, res = response) => {
    const conexion = new ConexionDepartamento();

    try {
        const departamento = await conexion.postDepartamento(req.body);
        res.status(201).json(departamento);
    } catch (err) {
        res.status(400).json({
            'msg': 'Error en el registro',
            'error': err.message
        });
    }
}

const actualizarDepartamento = async (req, res = response) => {
    const conexion = new ConexionDepartamento();

    try {
        const departamento = await conexion.updateDepartamento(req.params.id, req.body);
        res.status(200).json(departamento);
    } catch (err) {
        res.status(404).json({
            'msg': 'Error al actualizar el departamento',
            'error': err.message
        });
    }
}

const borrarDepartamento = async (req, res = response) => {
    const conexion = new ConexionDepartamento();

    try {
        const departamento = await conexion.deleteDepartamento(req.params.id);
        res.status(200).json(departamento);
    } catch (err) {
        res.status(404).json({
            'msg': 'Error al eliminar el departamento',
            'error': err.message
        });
    }
}

module.exports = {
    obtenerDepartamentos,
    obtenerDepartamentoPorId,
    obtenerDepartamentosPorJefe,
    crearDepartamento,
    actualizarDepartamento,
    borrarDepartamento
};