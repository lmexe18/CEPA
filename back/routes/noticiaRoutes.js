const express = require('express');
const { check } = require('express-validator');
const router = express.Router();
const controller = require('../controllers/noticiaController');
const { validateValues } = require('../helpers/validar-campos');
const authMid = require('../middlewares/validarJWT');

router.get('/', controller.obtenerNoticias);
router.get('/:id', controller.obtenerNoticiaPorId);
router.get('/tipo/:tipo', controller.obtenerNoticiasPorTipo);
router.post('/', [
    check('titulo').isString().length({ min:2, max:50 }).notEmpty().withMessage('El título debe de ser texto'),
    check('noticia').isString().notEmpty().withMessage('El contenido de la noticia es obligatorio'),
    check('enlace').isString().length({ min: 3 }).notEmpty().withMessage('El enlace debe de ser un texto'),
    check('foto').isString().notEmpty().withMessage('La foto debe de ser el nombre de esta'),
    check('visibilidad').isBoolean().notEmpty().withMessage('La visibilidad debe de ser true o false'),
    check('idTipoNoticia').isInt({ min:1 }).notEmpty().withMessage('El tipo de noticia es obligatorio'),
    validateValues
], authMid.validarJWT, controller.crearNoticia);
router.put('/:id', [
    check('titulo').isString().length({ min:2, max:50 }).withMessage('El título debe de ser texto'),
    check('noticia').notEmpty().withMessage('El contenido de la noticia es obligatorio'),
    check('enlace').isString().length({ min: 3 }).withMessage('El enlace debe de ser un texto'),
    check('foto').isString().withMessage('La foto debe de ser el nombre de esta'),
    check('visibilidad').isBoolean().withMessage('La visibilidad debe de ser true o false'),
    check('idTipoNoticia').isInt({ min:1 }).withMessage('El tipo de noticia es obligatorio'),
    validateValues
], authMid.validarJWT, controller.actualizarNoticia);
router.delete('/:id', authMid.validarJWT, controller.borrarNoticia);

module.exports = router;
