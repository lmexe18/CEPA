'use strict';

const { response } = require('express');
const ConexionCurso = require('../database/conexionCurso');

const obtenerCursos = async (req, res = response) => {
    const conexion = new ConexionCurso();

    try {
        const cursos = await conexion.getCursos();
        res.status(200).json(cursos);
    } catch (err) {
        res.status(404).json({
            'msg': 'No se han encontrado registros',
            'error': err.message
        });
    }
}

const obtenerCursoPorId = async (req, res = response) => {
    const conexion = new ConexionCurso();

    try {
        const curso = await conexion.getCursoPorId(req.params.id);
        res.status(200).json(curso);
    } catch (err) {
        res.status(404).json({
            'msg': 'No se ha encontrado el registro',
            'error': err.message
        });
    }
}

const obtenerCursosPorTutor = async (req, res = response) => {
    const conexion = new ConexionCurso();

    try {
        const cursos = await conexion.getCursosPorTutor(req.params.idTutor);
        res.status(200).json(cursos);
    } catch (err) {
        res.status(404).json({
            'msg': 'No se han encontrado registros para el tutor especificado',
            'error': err.message
        });
    }
}

const obtenerCursosPorTurno = async (req, res = response) => {
    const conexion = new ConexionCurso();

    try {
        const cursos = await conexion.getCursosPorTurno(req.params.idTurno);
        res.status(200).json(cursos);
    } catch (err) {
        res.status(404).json({
            'msg': 'No se han encontrado registros para el turno especificado',
            'error': err.message
        });
    }
}

const obtenerCursosPorTipoCurso = async (req, res = response) => {
    const conexion = new ConexionCurso();

    try {
        const cursos = await conexion.getCursosPorTipoCurso(req.params.idTipoCurso);
        res.status(200).json(cursos);
    } catch (err) {
        res.status(404).json({
            'msg': 'No se han encontrado registros para el tipo de curso especificado',
            'error': err.message
        });
    }
}

const crearCurso = async (req, res = response) => {
    const conexion = new ConexionCurso();

    try {
        const curso = await conexion.postCurso(req.body);
        res.status(201).json(curso);
    } catch (err) {
        res.status(400).json({
            'msg': 'Error en el registro',
            'error': err.message
        });
    }
}

const actualizarCurso = async (req, res = response) => {
    const conexion = new ConexionCurso();

    try {
        const curso = await conexion.updateCurso(req.params.id, req.body);
        res.status(200).json(curso);
    } catch (err) {
        res.status(404).json({
            'msg': 'Error al actualizar el curso',
            'error': err.message
        });
    }
}

const borrarCurso = async (req, res = response) => {
    const conexion = new ConexionCurso();

    try {
        const curso = await conexion.deleteCurso(req.params.id);
        res.status(200).json(curso);
    } catch (err) {
        res.status(404).json({
            'msg': 'Error al eliminar el curso',
            'error': err.message
        });
    }
}

module.exports = {
    obtenerCursos,
    obtenerCursoPorId,
    obtenerCursosPorTutor,
    obtenerCursosPorTurno,
    obtenerCursosPorTipoCurso,
    crearCurso,
    actualizarCurso,
    borrarCurso
};