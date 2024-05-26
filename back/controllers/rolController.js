const { response, request } = require('express');
const ConexionRol = require('../database/conexionRol');

const obtenerRoles = async (req, res = response) => {
    const conx = new ConexionRol();
    try {
        const roles = await conx.getRoles();
        res.status(200).json(roles);
    } catch (err) {
        res.status(404).json({
            msg: 'No se han encontrado registros',
            error: err.message
        });
    }
};

const obtenerRolPorId = async (req, res = response) => {
    const conx = new ConexionRol();
    try {
        const rol = await conx.getRolPorId(req.params.id);
        res.status(200).json(rol);
    } catch (err) {
        res.status(404).json({
            msg: 'No se ha encontrado el registro',
            error: err.message
        });
    }
};

const crearRol = async (req = request, res = response) => {
    const conx = new ConexionRol();
    try {
        const rol = await conx.postRol(req.body);
        res.status(201).json(rol);
    } catch (err) {
        res.status(400).json({
            msg: 'No se ha podido crear el rol',
            error: err.message
        });
    }
};

const actualizarRol = async (req, res = response) => {
    const conx = new ConexionRol();
    try {
        const rol = await conx.putRol(req.params.id, req.body);
        res.status(202).json(rol);
    } catch (err) {
        res.status(400).json({
            msg: 'No se ha podido actualizar el rol',
            error: err.message
        });
    }
};

const eliminarRol = async (req, res = response) => {
    const conx = new ConexionRol();
    try {
        await conx.deleteRol(req.params.id);
        res.status(202).json({ msg: 'Rol eliminado' });
    } catch (err) {
        res.status(404).json({
            msg: 'No se ha podido borrar el rol',
            error: err.message
        });
    }
};

module.exports = {
    obtenerRoles,
    obtenerRolPorId,
    crearRol,
    actualizarRol,
    eliminarRol
};