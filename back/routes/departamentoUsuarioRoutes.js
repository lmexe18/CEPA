const express = require('express');
const { check } = require('express-validator');
const router = express.Router();
const controller = require('../controllers/departamentoUsuarioController');
const { validateValues } = require('../helpers/validar-campos');
const authMid = require('../middlewares/validarJWT');
const accessMid = require('../middlewares/validarRoles');

router.get('/', controller.obtenerDepartamentoUsuarios);
router.get('/:id', controller.obtenerDepartamentoUsuarioPorId);

router.post('/', [
    check('idUsuario').isInt({ min: 1 }).notEmpty().withMessage('El id del usuario debe ser un número entero mayor a 0.'),
    check('idDepartamento').isInt({ min: 1 }).notEmpty().withMessage('El id del departamento debe ser un número entero mayor a 0.'),
    validateValues
], /*authMid.validarJWT, accessMid.validarRoles('admin'),*/ controller.crearDepartamentoUsuario);

router.delete('/:id', /*authMid.validarJWT, accessMid.validarRoles('admin'),*/ controller.borrarDepartamentoUsuario);

module.exports = router;