const { Router } = require('express');
const { validarArchivoSubir } = require('../middlewares/validar-archivo');
const { cargarArchivo, actualizarImagen, obtenerImagen, borrarImagen } = require('../controllers/uploadsFotoEventoController');
const authMid=require('../middlewares/validarJWT')
const accessMid=require('../middlewares/validarRoles')

const router = Router();

module.exports = router;