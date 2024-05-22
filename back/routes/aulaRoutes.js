const express = require('express');
const router = express.Router();
const controller = require('../controllers/aulaController'); // Asegúrate de que el nombre del archivo del controller sea correcto
const { check } = require('express-validator');
const { validateValues } = require('../helpers/validar-campos');
const authMid = require('../middlewares/validarJWT');
const accessMid = require('../middlewares/validarRoles');
const aulaEspecialMid = require('../middlewares/aulaEspecialMid');

router.get('/', controller.obtenerAulas);
router.get('/:id', controller.obtenerAulaPorId);
router.get('/:nombre', controller.obtenerAulaPorNombre);
router.post('/', [
    check('nombre').isString().isLength({ min: 1, max: 50 }).notEmpty().withMessage('El nombre debe de ser una cadena de texto'),
    validateValues
], authMid.validarJWT, accessMid.esJefeDeEstudios, aulaEspecialMid.nombreEnUsoAula, controller.crearAula);

router.put('/:id', [
    check('nombre').isString().isLength({ min: 1, max: 50 }).notEmpty().withMessage('El nombre debe de ser una cadena de texto'),
    validateValues
], authMid.validarJWT, accessMid.esJefeDeEstudios, aulaEspecialMid.nombreEnUsoAula, controller.actualizarAula);

router.delete('/:id', authMid.validarJWT, accessMid.esJefeDeEstudios, controller.borrarAula);

module.exports = router;
