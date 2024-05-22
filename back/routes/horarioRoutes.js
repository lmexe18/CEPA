const express = require('express');
const { check } = require('express-validator');
const router = express.Router();
const controller = require('../controllers/aulaHorarioController');
const { validateValues } = require('../helpers/validar-campos');
const authMid = require('../middlewares/validarJWT');
const accessMid = require('../middlewares/validarRoles');

router.get('/', controller.obtenerHorarios);
router.get('/:id', controller.obtenerHorarioPorId);
router.get('/aula/:id', controller.obtenerHorariosDeAula);
router.get('/curso/:id', controller.obtenerHorarioDeCurso);
router.post('/', [
    check('horaInicio').notEmpty().withMessage('La hora debe de tener un formato miliar correcto'),
    check('horaFin').notEmpty.withMessage('La hora debe de tener un formato militar correcto'),
    check('dia').isString().length({ min:5, max:9 }).notEmpty().withMessage('El dia debe de ser un dia de la semana'),
    check('idAula').isInt({ min: 1 }).notEmpty().withMessage('El id del aula debe de ser un número entero mayor a 0.'),
    check('idAsignatura').isInt({ min: 1 }).notEmpty().withMessage('El id de la asignatura debe de ser un número entero mayor a 0.'),
    check('idCurso').isInt({ min: 1 }).notEmpty().withMessage('El id del curso debe de ser un número entero mayor a 0.'),
    check('idProfesor').isInt({ min: 1 }).notEmpty().withMessage('El id del profesor debe de ser un número entero mayor a 0.'),
    validateValues
], controller.crearHorario);
router.put('/:id', [
    check('horaInicio').withMessage('La hora debe de tener un formato miliar correcto'),
    check('horaFin').withMessage('La hora debe de tener un formato militar correcto'),
    check('dia').isString().length({ min:5, max:9 }).notEmpty().withMessage('El dia debe de ser un dia de la semana'),
    check('idAula').isInt({ min: 1 }).withMessage('El id del aula debe de ser un número entero mayor a 0.'),
    check('idAsignatura').isInt({ min: 1 }).withMessage('El id de la asignatura debe de ser un número entero mayor a 0.'),
    check('idCurso').isInt({ min: 1 }).withMessage('El id del curso debe de ser un número entero mayor a 0.'),
    check('idProfesor').isInt({ min: 1 }).withMessage('El id del profesor debe de ser un número entero mayor a 0.'),
    validateValues
], controller.actualizarHorario);
router.delete('/:id', controller.borrarHorario);

module.exports = router;