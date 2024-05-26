const {Router } = require('express');
const { check } = require('express-validator');
const controller = require('../controllers/rolUsuarioController');
const router = Router();
const { validateValues } = require('../helpers/validar-campos');

router.get('/', controller.obtenerRolesUsuarios)
router.get('/:id', controller.obtenerRolUsuarioPorId)
router.get('/:idUsuario', controller.obtenerRolesDeUsuario)
router.post('/',[
    check('idUsuario').isInt({ min: 1}).notEmpty().withMessage('El idUsuario es requerido'),
    check('idRol').isInt({ min:1 }).notEmpty().withMessage('El idRol es requerido'),
    validateValues 
], controller.crearRolUsuario)
router.delete('/:id', controller.eliminarRolUsuario)

module.exports = router;