const { response, request } = require('express');
const ReservaConexion = require('../database/conexionReserva');

const obtenerReservas = (req, res = response) => {
    const conx = new ReservaConexion();

    conx.getReservas()
        .then((reservas) => {
            res.status(200).json(reservas);
        })
        .catch((err) => {
            res.status(404).json({ 
                'msg': 'No se han encontrado registros',
                'error': err.message
             });
        });
}

const obtenerReservaPorId = (req, res = response) => {
    const conx = new ReservaConexion();

    conx.getReservaPorId(req.params.id)
        .then((reserva) => {
            res.status(200).json(reserva);
        })
        .catch((err) => {
            res.status(404).json({ 
                'msg': 'No se ha encontrado el registro',
                'error': err.message
             });
        });
}

const obtenerReservasPorProfesor = (req, res = response) => {
    const conx = new ReservaConexion();

    conx.getReservasPorProfesor(req.params.id)
        .then((reservas) => {
            res.status(200).json(reservas);
        })
        .catch((err) => {
            res.status(404).json({ 
                'msg': 'No se han encontrado registros',
                'error': err.message
             });
        });
}

const obtenerReservasPorTurno = (req, res = response) => {
    const conx = new ReservaConexion();

    conx.getReservasPorTurno(req.params.id)
        .then((reservas) => {
            res.status(200).json(reservas);
        })
        .catch((err) => {
            res.status(404).json({ 
                'msg': 'No se han encontrado registros',
                'error': err.message
             });
        });
}

const obtenerReservasPorFecha = (req, res = response) => {
    const conx = new ReservaConexion();

    conx.getReservasPorFecha(req.params.fecha)
        .then((reservas) => {
            res.status(200).json(reservas);
        })
        .catch((err) => {
            res.status(404).json({ 
                'msg': 'No se han encontrado registros',
                'error': err.message
             });
        });
}

const subirReserva = (req = request, res = response) => {
    const conx = new ReservaConexion();

    conx.postReserva(req.body)
        .then((reserva) => {
            res.status(200).json(reserva);
        })
        .catch((err) => {
            res.status(404).json({
                'msg': 'No se ha podido subir el registro',
                'error': err.message
            });
        });
}

const borrarReserva = (req, res = response) => {
    const conx = new ReservaConexion();

    conx.deleteReserva(req.params.id)
        .then((reserva) => {
            res.status(200).json(reserva);
        })
        .catch((err) => {
            res.status(404).json({
                'msg': 'No se ha podido borrar el registro',
                'error': err.message
            });
        });
}

module.exports = {
    obtenerReservas,
    obtenerReservaPorId,
    obtenerReservasPorProfesor,
    obtenerReservasPorTurno,
    obtenerReservasPorFecha,
    subirReserva,
    borrarReserva
};