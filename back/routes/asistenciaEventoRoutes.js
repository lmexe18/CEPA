const express = require('express');
const { check } = require('express-validator');
const router = express.Router();
const controller = require('../controllers/asistenciaEventoController');
const { validateValues } = require('../helpers/validar-campos');
const authMid=require('../middlewares/validarJWT')
const accessMid=require('../middlewares/validarRoles')
const asistenciaMid=require('../middlewares/asistenciasMid');

router.get('/', controller.obtenerAsistenciasEventos);
router.get('/:id', controller.obtenerAsistenciaEventoPorId);
router.get('/:ususarioId',/*authMid.validarJWT,*/ controller.obtenerAsistenciasEventosDeUsuario);
router.get('/:eventoId', controller.obtenerUsuariosEvento);
router.get('/:eventoId/:usuarioId', controller.obtenerAsistenciaEventoUsuario)
router.post('/',[
    check('idEvento').isInt({ min: 1 }).withMessage('El id del evento debe de ser un número entero mayor a 0.'),
    check('idUsuario').isInt({ min: 1 }).withMessage('El id del usuario debe de ser un número entero mayor a 0.'),
    validateValues
],/*authMid.validarJWT,*/ asistenciaMid.asistenciaExiste(), controller.subirAsistenciaEvento);
router.delete('/:id',/*authMid.validarJWT,*/ controller.borrarAsistenciaEvento);
module.exports = router;