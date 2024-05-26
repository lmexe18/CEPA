const {Router } = require('express');
const controlador = require('../controllers/usuarioController');
const router = Router();

router.get('/', controlador.obtenerUsuarios)
router.get('/:id', controlador.obtenerUsuarioPorId)
router.post('/', controlador.subirUsuario)
router.put('/:id', controlador.actualizarUsuario)
router.delete('/:id', controlador.borrarUsuario)

module.exports = router;