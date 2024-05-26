const { response, request } = require('express');
const EventoConexion = require('../database/conexionEvento');

const obtenerEventos = (req, res = response) => {
    const conx = new EventoConexion();

    conx.getEventos()
        .then((eventos) => {
            res.status(200).json(eventos);
        })
        .catch((err) => {
            res.status(404).json({ 
                'msg': 'No se han encontrado registros',
                'error':err.message 
            });
        });
}

const obtenerEventoPorId = (req, res = response) => {
    const conx = new EventoConexion();

    conx.getEventoPorId(req.params.id)
        .then((evento) => {
            res.status(200).json(evento);
        })
        .catch((err) => {
            res.status(404).json({ 
                'msg': 'No se ha encontrado el registro',
                'error':err.message
             });
        });
}

const subirEvento = (req = request, res = response) => {
    const conx = new EventoConexion();

    conx.postEvento(req.body)
        .then((evento) => {
            res.status(200).json({id:evento});
        })
        .catch((err) => {
            res.status(404).json({
                'msg': 'No se ha podido subir el registro',
                'error':err.message
            })

        });
}

const borrarEvento = (req, res = response) => {
    const conx = new EventoConexion();

    conx.deleteEvento(req.params.id)
        .then((evento) => {
            res.status(200).json(evento);
        })
        .catch((err) => {
            res.status(404).json({
                'msg': 'No se ha podido borrar el registro',
                'error':err.message
            });
        });
}

const actualizarEvento = (req, res = response) => {
    const conx = new EventoConexion();

    conx.updateEvento(req.params.id, req.body)
        .then((evento) => {
            res.status(200).json(evento);
        })
        .catch((err) => {
            res.status(404).json({
                'msg': 'No se ha podido actualizar el registro',
                'error':err.message
            });
        });
}

const aumentarMg = (req, res) => {
    const conx = new EventoConexion()
    conx.plusMgEvento(req.params.id)
        .then((evento) => {
            res.status(200).json(evento);
        })
        .catch((err) => {
            res.status(404).json({
                'msg': 'No se ha podido actualizar el registro',
                'error':err.message
            });
        });
}

const obtenerNumAsistentes = (req, res) => {
    const conx = new EventoConexion()
    conx.getNumAsistentesEvento(req.params.id)
        .then((asistencias) => {
            res.status(200).json(asistencias)
        })
        .catch((err) => {
            res.status(404).json({
                'msg': 'No se ha podido obtener el numero de asistentes',
                'error':err.message
            })
        })
    
}

const eliminarAsistente = (req, res) => {
    const conx = new EventoConexion()
    conx.deleteAsistenteEvento(req.params.id)
        .then((evento) => {
            res.status(200).json(evento);
        })
        .catch((err) => {
            res.status(404).json({
                'msg': 'No se ha podido eliminar el asistente',
                'error':err.message
            });
        });
}

const anadirAsistente = (req, res) => {
    const conx = new EventoConexion()
    conx.putAsistenteEvento(req.params.id)
        .then((evento) => {
            res.status(200).json(evento);
        })
        .catch((err) => {
            res.status(404).json({
                'msg': 'No se ha podido anadir el asistente',
                'error':err.message
            });
        });
}

const obtenerEventosVisibles = (req, res) => {
    const conx = new EventoConexion();

    conx.getEventosVisibles()
        .then((eventos) => {
            res.status(200).json(eventos);
        })
        .catch((err) => {
            res.status(404).json({
                'msg': 'No se ha podido obtener los eventos activos',
                'error':err.message
            });
        });
}

const obtenerEventosPorTipo =(req = request, res = response) => {
    const conx = new EventoConexion();
    conx.getEventosPorTipo(req.params.idTipo)
        .then((eventos) => {
            res.status(200).json(eventos);
        })
        .catch((err) => {
            res.status(404).json({
                'msg': 'No se ha podido obtener los eventos por tipo',
                'error':err.message
            });
        })

}

module.exports = {
    obtenerEventos,
    obtenerEventoPorId,
    actualizarEvento,
    subirEvento,
    borrarEvento,
    aumentarMg,
    obtenerNumAsistentes,
    eliminarAsistente,
    anadirAsistente,
    obtenerEventosVisibles,
    obtenerEventosPorTipo
}
