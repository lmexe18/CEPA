const {Router } = require('express');
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
], controlador.rolesAsignadosPost)
router.delete('/:id', controlador.rolesAsignadosDelete)

module.exports = router;