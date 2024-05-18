const { response, request } = require('express');
const AlumnoCursoConexion = require('../database/conexionAlumnoCurso');

const obtenerAlumnosCursos = (req, res = response) => {
    const conx = new AlumnoCursoConexion();

    conx.getAlumnosCursos()
        .then((alumnosCursos) => {
            res.status(200).json(alumnosCursos);
        })
        .catch((err) => {
            res.status(404).json({
                'msg': 'No se han encontrado registros',
                'error': err
            });
        });
}

const obtenerAlumnoCursoPorId = (req, res = response) => {
    const conx = new AlumnoCursoConexion();

    conx.getAlumnoCursoPorId(req.params.id)
        .then((alumnoCurso) => {
            res.status(200).json(alumnoCurso);
        })
        .catch((err) => {
            res.status(404).json({
                'msg': 'No se ha encontrado el registro',
                'error': err
            });
        });
}

const obtenerAlumnosDeCurso = (req = request, res = response) => {
    const conx = new AlumnoCursoConexion()
    
    conx.getAlumnosDeCurso(req.params.idCurso)
        .then((alumnos) => {
            res.status(200).json(alumnos);
        })
        .catch((err) => {
            res.status(404).json({
                'msg': 'No se han encontrado registros',
                'error': err
            });
        });
}

const obtenerCursosDeAlumno = (req = request, res=response) => {
    const conx = new AlumnoCursoConexion();

    conx.getCursosDeAlumno(req.params.idAlumno)
        .then((cursos) => {
            res.status(200).json(cursos);
        })
        .catch((err) => {
            res.status(404).json({
                'msg': 'No se han encontrado registros',
                'error': err
            });
        });
}

const subirAlumnoCurso = (req = request, res = response) => {
    const conx = new AlumnoCursoConexion();

    conx.postAlumnoCurso(req.body)
        .then((alumnoCurso) => {
            res.status(200).json({alumnoCurso});
        })
        .catch((err) => {
            res.status(404).json({
                'msg':'No se ha podido subir el alumno curso',
                'error':err
            });
        });
}

const actualizarAlumnoCurso = (req, res = response) => {
    const conx = new EventoConexion();

    conx.updateEvento(req.params.id, req.body)
        .then((evento) => {
        
            res.status(200).json(evento);
        })
        .catch((err) => {
            res.status(404).json({
                'msg':'No se ha podido actualizar el alumno curso',
                'error':err
            });
        });
}

const borrarAlumnoCurso = (req, res = response) => {
    const conx = new AlumnoCursoConexion();

    conx.deleteAlumnoCurso(req.params.id)
        .then((alumnoCurso) => {
            res.status(200).json(alumnoCurso);
        })
        .catch((err) => {
            res.status(404).json({
                'msg':'No se ha podido eliminar el alumno curso',
                'error':err
            });
        });
}

module.exports = {
    obtenerAlumnosCursos,
    obtenerAlumnoCursoPorId,
    obtenerAlumnosDeCurso,
    obtenerCursosDeAlumno,
    subirAlumnoCurso,
    actualizarAlumnoCurso,
    borrarAlumnoCurso
}
