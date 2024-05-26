const { response, request } = require('express');
const AsignaturaProfeCursoConexion = require('../database/conexionAsignaturaProfeCurso');

const obtenerAsignaturasProfesCursos = (req, res = response) => {
    const conx = new AsignaturaProfeCursoConexion();

    conx.getAsignaturasProfesCursos()
        .then((asignaturasProfesCursos) => {
            res.status(200).json(asignaturasProfesCursos);
        })
        .catch((err) => {
            res.status(404).json({
                'msg': 'No se han encontrado registros',
                'error': err
            });
        });
}

const obtenerAsignaturaProfeCursoPorId = (req, res = response) => {
    const conx = new AsignaturaProfeCursoConexion();

    conx.getAsignaturaProfeCursoPorId(req.params.id)
        .then((asignaturaProfeCurso) => {
            res.status(200).json(asignaturaProfeCurso);
        })
        .catch((err) => {
            res.status(404).json({
                'msg': 'No se ha encontrado el registro',
                'error': err
            });
        });
}

const obtenerInfoDeCurso = (req = request, res = response) => {
    const conx = new AsignaturaProfeCursoConexion();
    
    conx.getInfoDeCurso(req.params.cursoId)
        .then((info) => {
            res.status(200).json(info);
        })
        .catch((err) => {
            res.status(404).json({
                'msg': 'No se han encontrado registros',
                'error': err
            });
        });
}

const obtenerInfoDeProfesor = (req = request, res = response) => {
    const conx = new AsignaturaProfeCursoConexion();

    conx.getInfoDeProfesor(req.params.usuarioId)
        .then((info) => {
            res.status(200).json(info);
        })
        .catch((err) => {
            res.status(404).json({
                'msg': 'No se han encontrado registros',
                'error': err
            });
        });
}

const obtenerInfoDeAsignatura = (req = request, res = response) => {
    const conx = new AsignaturaProfeCursoConexion();

    conx.getInfoDeAsignatura(req.params.asignaturaId)
        .then((info) => {
            res.status(200).json(info);
        })
        .catch((err) => {
            res.status(404).json({
                'msg': 'No se han encontrado registros',
                'error': err
            });
        });
}

const subirAsignaturaProfeCurso = (req = request, res = response) => {
    const conx = new AsignaturaProfeCursoConexion();

    conx.postAsignaturaProfeCurso(req.body)
        .then((asignaturaProfeCurso) => {
            res.status(200).json({ asignaturaProfeCurso });
        })
        .catch((err) => {
            res.status(404).json({
                'msg': 'No se ha podido subir la asignatura, profesor y curso',
                'error': err
            });
        });
}

const actualizarAsignaturaProfeCurso = (req, res = response) => {
    const conx = new AsignaturaProfeCursoConexion();

    conx.updateAsignaturaProfeCurso(req.params.id, req.body)
        .then((asignaturaProfeCurso) => {
            res.status(200).json(asignaturaProfeCurso);
        })
        .catch((err) => {
            res.status(404).json({
                'msg': 'No se ha podido actualizar la asignatura, profesor y curso',
                'error': err
            });
        });
}

const borrarAsignaturaProfeCurso = (req, res = response) => {
    const conx = new AsignaturaProfeCursoConexion();

    conx.deleteAsignaturaProfeCurso(req.params.id)
        .then((asignaturaProfeCurso) => {
            res.status(200).json(asignaturaProfeCurso);
        })
        .catch((err) => {
            res.status(404).json({
                'msg': 'No se ha podido eliminar la asignatura, profesor y curso',
                'error': err
            });
        });
}

module.exports = {
    obtenerAsignaturasProfesCursos,
    obtenerAsignaturaProfeCursoPorId,
    obtenerInfoDeCurso,
    obtenerInfoDeProfesor,
    obtenerInfoDeAsignatura,
    subirAsignaturaProfeCurso,
    actualizarAsignaturaProfeCurso,
    borrarAsignaturaProfeCurso
}