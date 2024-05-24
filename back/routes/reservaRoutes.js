const express = require('express');
const { check } = require('express-validator');
const router = express.Router();
const controller = require('../controllers/reservaController');
const { validateValues } = require('../helpers/validar-campos');
const authMid = require('../middlewares/validarJWT');

router.get('/', controller.obtenerReservas);
router.get('/:id', controller.obtenerReservaPorId);
router.get('/profesor/:id', controller.obtenerReservasPorProfesor);
router.get('/turno/:id', controller.obtenerReservasPorTurno);
router.get('/fecha/:fecha', controller.obtenerReservasPorFecha);
router.post('/', [
    check('horaInicio').isString().notEmpty().withMessage('La hora de inicio es requerida y debe de tener un formato militar correcto'),
    check('horaFin').isString().notEmpty().withMessage('La hora de fin es requerida y debe de tener un formato militar correcto'),
    check('fecha').isDate().notEmpty().withMessage('La fecha es requerida y debe ser una fecha válida'),
    check('idTurno').isInt({ min: 1 }).notEmpty().withMessage('El id del turno debe ser un número entero mayor a 0'),
    check('idAula').isInt({ min: 1 }).notEmpty().withMessage('El id del aula debe ser un número entero mayor a 0'),
    check('idProfesor').isInt({ min: 1 }).notEmpty().withMessage('El id del profesor debe ser un número entero mayor a 0'),
    validateValues
], authMid.validarJWT, controller.subirReserva);
router.delete('/:id', authMid.validarJWT, controller.borrarReserva);

module.exports = router;