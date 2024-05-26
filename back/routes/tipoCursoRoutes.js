const express = require('express');
const { check } = require('express-validator');
const router = express.Router();
const controller = require('../controllers/tipoCursoController');
const { validateValues } = require('../helpers/validar-campos');
const authMid = require('../middlewares/validarJWT');

router.get('/', controller.obtenerTiposCursos);
router.get('/:id', controller.obtenerTipoCursoPorId);
router.post('/', [
    check('nombre').isString().length({ min:1, max:50 }).notEmpty().withMessage('El nombre es obligatorio'),
    check('activo').isBoolean().withMessage('El campo activo debe ser un valor true o false'),
    validateValues
], authMid.validarJWT, controller.crearTipoCurso);
router.put('/:id', [
    check('nombre').isString().length({ min:1, max:50 }).withMessage('El nombre es obligatorio'),
    check('activo').isBoolean().withMessage('El campo activo debe ser un valor true o false'),
    validateValues
], authMid.validarJWT, controller.actualizarTipoCurso);
router.delete('/:id', authMid.validarJWT, controller.eliminarTipoCurso);

module.exports = router;