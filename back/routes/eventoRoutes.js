// Laura
const express = require('express');
const { check } = require('express-validator');
const router = express.Router();
const controller = require('../controllers/eventoController');
const { validateValues } = require('../helpers/validar-campos');
const authMid=require('../middlewares/validarJWT')
const accessMid=require('../middlewares/validarRoles')
const eventosMid = require('../middlewares/eventosMid');

router.get('/', controller.obtenerEventos);
router.get('/visibles', controller.obtenerEventosVisibles);
router.get('/:id', controller.obtenerEventoPorId);
router.post('/', [
    check('nombre').isString().notEmpty().isLength({ min: 1, max: 50 }).withMessage('El nombre tiene que ser un texto de máximo 50 caracteres'),
    check('descripcion').isString().notEmpty().withMessage('La descripción tiene que ser un texto'),
    check('fechaHora').isDate().notEmpty().withMessage('La fecha y hora debe de tener formato correcto'),
    check('fotoCartel').isString().withMessage('La foto de cartel debe de ser el nombre de la foto'),
    check('mg').isInt({ min:0 }).withMessage('El número de mg debe de ser un número entero positivo'),
    check('visibilidad').isBoolean().notEmpty().withMessage('La visibilidad debe de ser true o false'),
    check('numAsistentes').isInt({ min:0 }).withMessage('El número de asistentes debe de ser un número entero positivo'),
    validateValues
], authMid.validarJWT,accessMid.esAdmin, controller.subirEvento);
router.delete('/:id', controller.borrarEvento);
router.put('/:id', [
    check('nombre').isString().isLength({ min: 1, max: 50 }).withMessage('El nombre tiene que ser un texto de másximo 50 caracteres'),
    check('descripcion').isString().withMessage('La descripción debe de ser un texto'),
    check('fechaHora').isDate().withMessage('La fecha y hora debe de tener un formato correcto'),
    check('fotoCartel').isString().withMessage('La foto de cartel debe de ser el nombre de la foto'),
    check('mg').isInt({ min:0 }).withMessage('El número de mg debe de ser un número entero positivo'),
    check('visibilidad').isBoolean().withMessage('La visibilidad debe de ser true o false'),
    check('numAsistentes').isInt({ min:0 }).withMessage('El número de asistentes debe de ser un número entero positivo'),
    validateValues
], authMid.validarJWT,accessMid.esAdmin, controller.actualizarEvento);
router.put('/mg/:id', controller.aumentarMg)
router.get('/numAsistentes/:id', controller.obtenerNumAsistentes)
router.put('/eliminarPlaza/:id', eventosMid.quedanPlazas, controller.eliminarAsistente)
router.put('/anadirPlaza/:id', controller.anadirAsistente)
router.get('/tipo/:idTipo', controller.obtenerEventosPorTipo)
module.exports = router;