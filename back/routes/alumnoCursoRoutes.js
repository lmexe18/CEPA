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
    check('idCurso').isInt({ min:1 }).notEmpty().withMessage('El id del curso debe de ser un número entero mayor a 0.'),
    check('idUsuario').isInt({ min:1 }).notEmpty().withMessage('El id de usuario debe de ser un número entero mayor a 0.'),
    validateValues
],/*authMid.validarJWT,*/ controller.subirAlumnoCurso);
router.delete('/:id',authMid.validarJWT, controller.borrarAlumnoCurso);
module.exports = router;