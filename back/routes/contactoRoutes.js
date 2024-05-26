const express = require('express');
const { check } = require('express-validator');
const router = express.Router();
const controller = require('../controllers/contactoController');
const { validateValues } = require('../helpers/validar-campos');
const authMid = require('../middlewares/validarJWT');

router.get('/', controller.obtenerContactos);
router.get('/:id', controller.obtenerContactoPorId);
router.post('/',
    [
        check('nombreCentro').isString().length({ min:1, max: 50 }).notEmpty().withMessage('El nombre del centro es obligatorio.'),
        check('direccion').isString().length({ min:1 }).notEmpty().withMessage('La dirección es obligatoria.'),
        check('telefono').isInt().length({ min:9, max: 15}).notEmpty().withMessage('El teléfono es obligatorio.'),
        check('email').isEmail().notEmpty().isEmail().withMessage('El email debe ser válido.'),
        validateValues
    ],
    authMid.validarJWT,
    controller.crearContacto
);
router.put('/:id',
    [
        check('nombreCentro').isString().length({ min:1, max: 50 }).withMessage('El nombre del centro es obligatorio.'),
        check('direccion').isString().length({ min:1 }).withMessage('La dirección es obligatoria.'),
        check('telefono').isInt().length({ min:9, max: 15}).withMessage('El teléfono es obligatorio.'),
        check('email').isEmail().withMessage('El email debe ser válido.'),
        validateValues
    ],
    authMid.validarJWT,
    controller.actualizarContacto
);
router.delete('/:id', authMid.validarJWT, controller.eliminarContacto);

module.exports = router;