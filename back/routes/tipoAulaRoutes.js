const express = require('express');
const { check } = require('express-validator');
const router = express.Router();
const controller = require('../controllers/tipoAulaController');
const { validateValues } = require('../helpers/validar-campos');
const authMid = require('../middlewares/validarJWT');

router.get('/', controller.obtenerTiposAulas);
router.get('/:id', controller.obtenerTipoAulaPorId);
router.post('/', [
    check('nombre').isString().isLength({ min:1, max:50}).notEmpty().withMessage('El nombre es obligatorio'),
    check('activo').isBoolean().withMessage('El campo activo debe ser un valor true o false'),
    validateValues
], authMid.validarJWT, controller.crearTipoAula);
router.put('/:id', [
    check('nombre').isString().isLength({ min:1, max:50 }).withMessage('El nombre es obligatorio'),
    check('activo').isBoolean().withMessage('El campo activo debe ser un valor true o false'),
    validateValues
], authMid.validarJWT, controller.actualizarTipoAula);
router.delete('/:id', authMid.validarJWT, controller.eliminarTipoAula);

module.exports = router;