const express = require('express');
const { check } = require('express-validator');
const router = express.Router();
const controller = require('../controllers/asignaturaController');
const { validateValues } = require('../helpers/validar-campos');
const authMid = require('../middlewares/validarJWT');
const accessMid = require('../middlewares/validarRoles');

router.get('/', controller.obtenerAsignaturas);
router.get('/:id', controller.obtenerAsignaturaPorId);
router.post('/', [
    check('nombre').isString().isEmpty().withMessage('El nombre es obligatorio'),
    check('idDepartamento').isInt().withMessage('El idDepartamento debe ser un número entero'),
    check('activo').isBoolean().withMessage('Activo true o false es obligatorio'),
    validateValues
], /*authMid.validarJWT,*/ controller.subirAsignatura);
router.put('/:id', [
    check('nombre').optional().not().isEmpty().withMessage('El nombre es obligatorio'),
    check('idDepartamento').optional().isInt().withMessage('El idDepartamento debe ser un número entero'),
    validateValues
], /*authMid.validarJWT,*/ controller.actualizarAsignatura);
router.delete('/:id', authMid.validarJWT, controller.borrarAsignatura);

module.exports = router;
