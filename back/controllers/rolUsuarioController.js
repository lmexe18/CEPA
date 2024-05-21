const { response, request } = require('express');
const ConexionRolUsuario = require('../database/conexionRolUsuario');

const obtenerRolesUsuarios = (req, res = response) => {
    const conx = new ConexionRolUsuario();
    conx.getRolesUsuarios()
        .then((roles) => {
            res.status(200).json(roles);
        })
        .catch((err) => {
            res.status(500).json({
                'msg': 'Error al obtener los roles de usuario',
                'error': err.message
            });
        });
}

const obtenerRolUsuarioPorId = (req, res = response) => {
    const conx = new ConexionRolUsuario();
    conx.getRolUsuarioPorId(req.params.idUser)
        .then((rol) => {
            if (rol) {
                res.status(200).json(rol);
            } else {
                res.status(404).json({
                    'msg': 'No se encontró el rol de usuario con el ID proporcionado'
                });
            }
        })
        .catch((err) => {
            res.status(500).json({
                'msg': 'Error al obtener el rol de usuario',
                'error': err.message
            });
        });
}

const obtenerRolesDeUsuario = (req = request, res = response) => {
    const conx = new ConexionRolUsuario();
    conx.getRolesDeUsuario(req.params.idUser)
        .then((roles) => {
            if (roles) {
                res.status(200).json(roles);
            } else {
                res.status(404).json({
                    'msg': 'No se encontraron roles de usuario para el ID proporcionado'
                });
            }
        })
        .catch((err) => {
            res.status(500).json({
                'msg': 'Error al obtener los roles de usuario',
                'error': err.message
            });
        });

}


const crearRolUsuario = (req = request, res = response) => {
    const conx = new ConexionRolUsuario();
    conx.postRolUsuario(req.body)
        .then((rol) => {
            res.status(201).json(rol);
        })
        .catch((err) => {
            res.status(500).json({
                'msg': 'Error al crear el rol de usuario',
                'error': err.message
            });
        });
}

const eliminarRolUsuario = (req, res) => {
    const conx = new ConexionRolUsuario();
    conx.deleteRolUsuario(req.params.id)
        .then((rol) => {
            res.status(200).json(rol);
        })
        .catch((err) => {
            res.status(500).json({
                'msg': 'Error al eliminar el rol de usuario',
                'error': err.message
            });
        });
}

module.exports = {
    obtenerRolesUsuarios,
    obtenerRolUsuarioPorId,
    obtenerRolesDeUsuario,
    crearRolUsuario,
    eliminarRolUsuario
}