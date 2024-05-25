const express = require('express');
const { check } = require('express-validator');
const router = express.Router();
const controller = require('../controllers/tipoEventoController');
const { validateValues } = require('../helpers/validar-campos');
const authMid = require('../middlewares/validarJWT');

router.get('/', controller.obtenerTiposEventos);
router.get('/:id', controller.obtenerTipoEventoPorId);
router.post('/', [
    check('nombre').isString().length({ min:1, max:50 }).notEmpty().withMessage('El nombre es obligatorio'),
    check('activo').isBoolean().withMessage('El campo activo debe ser un valor true o false'),
    validateValues
], authMid.validarJWT, controller.crearTipoEvento);
router.put('/:id', [
    check('nombre').isString().length({ min:1, max:50 }).withMessage('El nombre es obligatorio'),
    check('activo').isBoolean().withMessage('El campo activo debe ser un valor true o false'),
    validateValues
], authMid.validarJWT, controller.actualizarTipoEvento);
router.delete('/:id', authMid.validarJWT, controller.eliminarTipoEvento);

module.exports = router;