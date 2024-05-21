const {Router } = require('express');
const controller = require('../controllers/rolUsuarioController');
const router = Router();

router.get('/', controller.obtenerRolesUsuarios)
router.get('/:id', controller.obtenerRolUsuarioPorId)
router.get('/:idUsuario', controller.obtenerRolesDeUsuario)
router.post('/', controlador.rolesAsignadosPost)
router.delete('/:id', controlador.rolesAsignadosDelete)

module.exports = router;