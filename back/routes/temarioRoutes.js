const express = require('express');
const { check } = require('express-validator');
const router = express.Router();
const controller = require('../controllers/temarioController');
const { validateValues } = require('../helpers/validar-campos');
const authMid = require('../middlewares/validarJWT');

router.get('/', controller.obtenerTemarios);
router.get('/:id', controller.obtenerTemarioPorId);
router.post('/', [
    check('tema').isString().notEmpty().withMessage('El tema es obligatorio'),
    check('link').isString().notEmpty().withMessage('El link es obligatorio'),
    check('idAsignatura').isInt({ min: 1 }).withMessage('El id de la asignatura debe ser un número entero mayor a 0'),
    check('visibilidad').isBoolean().withMessage('La visibilidad debe ser un valor true o false'),
    check('activo').isBoolean().withMessage('El campo activo debe ser un valor true o false'),
    validateValues
], authMid.validarJWT, controller.crearTemario);
router.put('/:id', [
    check('tema').optional().isString().withMessage('El tema es obligatorio'),
    check('link').optional().isString().withMessage('El link es obligatorio'),
    check('idAsignatura').isInt({ min: 1 }).withMessage('El id de la asignatura debe ser un número entero mayor a 0'),
    check('visibilidad').isBoolean().withMessage('La visibilidad debe ser un valor true o false'),
    check('activo').isBoolean().withMessage('El campo activo debe ser un valor true o false'),
    validateValues
], authMid.validarJWT, controller.actualizarTemario);
router.delete('/:id', authMid.validarJWT, controller.eliminarTemario);
router.get('/asignatura/:idAsignatura', controller.obtenerTemarioDeAsignatura)

module.exports = router;