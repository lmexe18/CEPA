const express = require('express');
const { check } = require('express-validator');
const router = express.Router();
const controller = require('../controllers/cursoController');
const { validateValues } = require('../helpers/validar-campos');
const authMid = require('../middlewares/validarJWT');
const accessMid = require('../middlewares/validarRoles');

router.get('/', controller.obtenerCursos);
router.get('/:id', controller.obtenerCursoPorId);
router.get('/tutor/:idTutor', controller.obtenerCursosPorTutor);
router.get('/turno/:idTurno', controller.obtenerCursosPorTurno);
router.get('/tipocurso/:idTipoCurso', controller.obtenerCursosPorTipoCurso);

router.post('/', [
    check('numeroCurso').isInt({ min: 1 }).withMessage('El número del curso debe de ser un número entero mayor a 0.'),
    check('horario').isString().withMessage('El horario no puede estar vacío.'),
    check('fechaInicio').isISO8601().withMessage('La fecha de inicio debe ser una fecha válida.'),
    check('fechaFin').isISO8601().withMessage('La fecha de fin debe ser una fecha válida.'),
    check('idTipoCurso').isInt({ min: 1 }).withMessage('El id del tipo de curso debe de ser un número entero mayor a 0.'),
    check('idTutor').isInt({ min: 1 }).withMessage('El id del tutor debe de ser un número entero mayor a 0.'),
    check('activo').isBoolean().withMessage('El campo activo debe ser verdadero o falso.'),
    validateValues
], /*authMid.validarJWT, accessMid.validarRoles('admin'),*/ controller.crearCurso);

router.put('/:id', [
    check('numeroCurso').isInt({ min: 1 }).optional().withMessage('El número del curso debe de ser un número entero mayor a 0.'),
    check('horario').isString().optional().withMessage('El horario no puede estar vacío.'),
    check('fechaInicio').isISO8601().toDate().optional().withMessage('La fecha de inicio debe ser una fecha válida.'),
    check('fechaFin').isISO8601().toDate().optional().withMessage('La fecha de fin debe ser una fecha válida.'),
    check('idTipoCurso').isInt({ min: 1 }).optional().withMessage('El id del tipo de curso debe de ser un número entero mayor a 0.'),
    check('idTutor').isInt({ min: 1 }).optional().withMessage('El id del tutor debe de ser un número entero mayor a 0.'),
    check('activo').isBoolean().optional().withMessage('El campo activo debe ser verdadero o falso.'),
    validateValues
], /*authMid.validarJWT, accessMid.validarRoles('admin'),*/ controller.actualizarCurso);

router.delete('/:id', /*authMid.validarJWT, accessMid.validarRoles('admin'),*/ controller.borrarCurso);

module.exports = router;