const express = require('express');
const { check } = require('express-validator');
const router = express.Router();
const controller = require('../controllers/alumnoCursoController');
const { validateValues } = require('../helpers/validar-campos');
const authMid=require('../middlewares/validarJWT')
const accessMid=require('../middlewares/validarRoles')

router.get('/', controller.obtenerAlumnosCursos);
router.get('/:id', controller.obtenerAlumnoCursoPorId);
router.get('/alumnoscusos/:cursoId',/*authMid.validarJWT,*/ controller.obtenerAlumnosDeCurso);
router.get('/cursosalumnos/:usuarioId', controller.obtenerCursosDeAlumno);
router.post('/',[
    check('idCurso').isInt().withMessage('El id numérico del curso es obligatorio'),
    check('idUsuario').isInt().withMessage('El id numérico del usuario es obligatorio'),
    validateValues
],/*authMid.validarJWT,*/ controller.subirAlumnoCurso);
router.delete('/:id',authMid.validarJWT, controller.borrarAlumnoCurso);
module.exports = router;