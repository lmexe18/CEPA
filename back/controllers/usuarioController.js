const {response,request} = require('express');
const Conexion = require('../database/conexionUsuario');

const obtenerUsuarios =  (req, res = response) => {
    
    const conx = new Conexion();
    conx.getUsuarios()    
        .then( msg => {
            res.status(200).json(msg);
        })
        .catch( err => {
            res.status(404).json({
                'msg':'Error al obtener los usuarios',
                'error':err
            })
        });
}

const obtenerUsuarioPorId =  (req, res = response) => {
    const conx = new Conexion();
    conx.getUsuarioPorId(req.params.id)    
        .then( msg => {
            res.status(200).json(msg);
        })
        .catch( err => {
            res.status(404).json({
                'msg':'No se ha encontrado el registro',
                'error':err
            });
        });
}

const subirUsuario =  (req = request, res = response) => {
    const conx = new Conexion();
    conx.postUsuario(req.body)    
        .then( msg => {
            res.status(201).json(msg);
        })
        .catch( err => {
            res.status(400).json({
                'msg':'Error al subir el usuario',
                'error':err
            });
        });
}

const borrarUsuario =  (req, res) => {
    const conx = new Conexion();
    conx.deleteUsuarios(req.params.id)    
        .then( msg => {
            res.status(202).json(msg);
        })
        .catch( err => {
            res.status(400).json({
                'msg':'Error al borrar el usuario',
                'error':err
            });
        });
}

const actualizarUsuario =  (req, res = response) => {
    const conx = new Conexion();
    conx.putUsuario(req.params.id, req.body)    
        .then( msg => {
            res.status(202).json(msg);
        })
        .catch( err => {
            res.status(400).json({
                'msg':'Error al actualizar el usuario',
                'error':err
            });
        });
}


module.exports = {
    obtenerUsuarios,
    borrarUsuario,
    subirUsuario,
    actualizarUsuario,
    obtenerUsuarioPorId
}