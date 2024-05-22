const express = require('express');
const { check } = require('express-validator');
const router = express.Router();
const controller = require('../controllers/equipoDirectivoController');
const { validateValues } = require('../helpers/validar-campos');
const authMid = require('../middlewares/validarJWT');
const accessMid = require('../middlewares/validarRoles');

router.get('/', controller.obtenerEquiposDirectivos);
router.get('/:id', controller.obtenerEquipoDirectivoPorId);

router.post('/', [
    check('puesto').isString().length({ min:1 }).notEmpty().withMessage('El puesto es obligatorio.'),
    check('nombre').isString().length({ min:1, max:50 }).notEmpty().withMessage('El nombre es obligatorio.'),
    check('email').isEmail().notEmpty().withMessage('El email debe ser una dirección de correo válida.'),
    validateValues
], controller.crearEquipoDirectivo);

router.put('/:idEquipo', [
    check('puesto').isString().length({ min:1 }).notEmpty().withMessage('El puesto no puede estar vacío si se proporciona.'),
    check('nombre').optional().notEmpty().withMessage('El nombre no puede estar vacío si se proporciona.'),
    check('email').optional().isEmail().withMessage('El email debe ser una dirección de correo válida si se proporciona.'),
    validateValues
],  controller.actualizarEquipoDirectivo);

router.delete('/:id', controller.borrarEquipoDirectivo);

module.exports = router;
