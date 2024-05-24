const express = require('express');
const { check } = require('express-validator');
const router = express.Router();
const controller = require('../controllers/noticiaGaleriaController');
const { validateValues } = require('../helpers/validar-campos');
const authMid = require('../middlewares/validarJWT');

router.get('/', controller.obtenerNoticiaGalerias);
router.get('/:id', controller.obtenerNoticiaGaleriaPorId);
router.get('/galerias/:noticiaId', controller.obtenerGaleriaDeNoticia);
router.post('/', [
    check('idNoticia').isInt({ min: 1 }).notEmpty().withMessage('El id de la noticia debe de ser un número entero mayor a 0'),
    check('foto').isString().notEmpty().withMessage('La foto debe de ser el nombre de esta'),
    validateValues
], authMid.validarJWT, controller.subirNoticiaGaleria);
router.delete('/:id', authMid.validarJWT, controller.borrarNoticiaGaleria);

module.exports = router;