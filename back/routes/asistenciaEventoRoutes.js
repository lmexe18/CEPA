const express = require('express');
const { check } = require('express-validator');
const router = express.Router();
const controller = require('../controllers/asistenciaEventoController');
const { validateValues } = require('../helpers/validar-campos');
const authMid=require('../middlewares/validarJWT')
const accessMid=require('../middlewares/validarRoles')
const asistenciaMid=require('../middlewares/asistenciasMid');

router.get('/', controller.obtenerAsistencias);
router.get('/:id', controller.obtenerAsistenciaPorId);
router.get('/:ususarioId',/*authMid.validarJWT,*/ controller.obtenerAsistenciasDeUsuario);
router.get('/:eventoId', controller.obtenerUsuariosDeEvento);
router.get('/:eventoId/:usuarioId', controller.obtenerAsistenciaEventoUsuario)
router.post('/',[
    check('idEvento').isInt().withMessage('El id del evento debe de ser un número entero mayor a 0.'),
    check('idUsuario').isInt().withMessage('El id del usuario debe de ser un número entero mayor a 0.'),
    validateValues
],/*authMid.validarJWT,*/ asistenciaMid.asistenciaExiste(), controller.subirAsistencia);
router.update('/:id',[
    check('idEvento').isInt().withMessage('El id de evneto debe de ser un número entero mayor a 0.'),
    check('idUsuario').isInt().withMessage('El id del usuario debe de ser un número entero mayor a 0.'),
    validateValues
],/*authMid.validarJWT,*/ controller.actualizarAsistenciaEvento)
router.delete('/:id',/*authMid.validarJWT,*/ controller.borrarAsistencia);
module.exports = router;