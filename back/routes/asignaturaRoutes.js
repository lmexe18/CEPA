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
    check('nombre').isString().isLength({ min: 2, max: 50}).notEmpty().withMessage('El nombre debe de ser un texto'),
    check('idDepartamento').isInt({ min:1 }).notEmpty().withMessage('El idDepartamento debe ser un número entero'),
    check('activo').isBoolean().notEmpty().withMessage('Activo debe de ser true o false'),
    validateValues
], /*authMid.validarJWT,*/ controller.subirAsignatura);
router.put('/:id', [
    check('nombre').isString().isLength({ min:2, max:50}).withMessage('El nombre debe de ser un texto'),
    check('idDepartamento').isInt({ min:1 }).withMessage('El idDepartamento debe ser un número entero mayor a 0.'),
    validateValues
], /*authMid.validarJWT,*/ controller.actualizarAsignatura);
router.delete('/:id', authMid.validarJWT, controller.borrarAsignatura);

module.exports = router;
