const express = require('express');
const { check } = require('express-validator');
const router = express.Router();
const controller = require('../controllers/departamentoController');
const { validateValues } = require('../helpers/validar-campos');
const authMid = require('../middlewares/validarJWT');
const accessMid = require('../middlewares/validarRoles');

router.get('/', controller.obtenerDepartamentos);
router.get('/:id', controller.obtenerDepartamentoPorId);
router.get('/jefe/:idJefeDepartamento', controller.obtenerDepartamentosPorJefe);

router.post('/', [
    check('nombre').isString().length({ min:1, max:50 }).notEmpty().withMessage('El nombre no puede estar vacío.'),
    check('descripcion').isString().withMessage('La descripción debe ser un texto.'),
    check('foto').isString().withMessage('La foto debe de ser el nombre de esta.'),
    check('idJefeDepartamento').isInt({ min: 1 }).optional().withMessage('El id del jefe de departamento debe de ser un número entero mayor a 0.'),
    check('activo').isBoolean().notEmpty().withMessage('El campo activo debe ser verdadero o falso.'),
    validateValues
], /*authMid.validarJWT, accessMid.validarRoles('admin'),*/ controller.crearDepartamento);

router.put('/:idDepart', [
    check('nombre').isString().withMessage('El nombre debe ser un texto.'),
    check('descripcion').isString().withMessage('La descripción debe ser un texto.'),
    check('foto').isString().withMessage('La foto debe ser una URL.'),
    check('idJefeDepartamento').isInt({ min: 1 }).optional().withMessage('El id del jefe de departamento debe de ser un número entero mayor a 0.'),
    check('activo').isBoolean().withMessage('El campo activo debe ser verdadero o falso.'),
    validateValues
], /*authMid.validarJWT, accessMid.validarRoles('admin'),*/ controller.actualizarDepartamento);

router.delete('/:id', /*authMid.validarJWT, accessMid.validarRoles('admin'),*/ controller.borrarDepartamento);

module.exports = router;