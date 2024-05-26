const express = require('express');
const { check } = require('express-validator');
const router = express.Router();
const controller = require('../controllers/eventoGaleriaController');
const { validateValues } = require('../helpers/validar-campos');
const authMid=require('../middlewares/validarJWT')

router.get('/', controller.obtenerEventoGalerias);
router.get('/:id', controller.obtenerEventoGaleriaPorId);
router.post('/',[
    check('idEvento').isInt({ min: 1 }).notEmpty().withMessage('El id del evento debe de ser un número entero mayor a 0'),
    check('foto').isString().notEmpty().withMessage('La foto debe de ser el nombre de esta'),
    validateValues
],authMid.validarJWT, controller.subirEventoGaleria);
router.delete('/:id', authMid.validarJWT, controller.borrarEventoGaleria);
router.get('/:id', controller.obtenerGaleriaDeEvento)

module.exports = router;