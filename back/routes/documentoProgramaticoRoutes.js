const express = require('express');
const { check } = require('express-validator');
const router = express.Router();
const controller = require('../controllers/documentoProgramaticoController');
const { validateValues } = require('../helpers/validar-campos');
const authMid = require('../middlewares/validarJWT');
const accessMid = require('../middlewares/validarRoles');

router.get('/', controller.obtenerDocumentosProgramaticos);
router.get('/:id', controller.obtenerDocumentoProgramaticoPorId);

router.post('/', [
    check('nombre').isString().isLength({ min:1 }).notEmpty().withMessage('El nombre es obligatorio.'),
    check('link').isURL().withMessage('El link debe ser una URL válida.'),
    check('tipo').isString().isLength({ min: 1}).notEmpty().withMessage('El tipo es obligatorio.'),
    validateValues
], /*authMid.validarJWT, accessMid.validarRoles('admin'),*/ controller.crearDocumentoProgramatico);

router.put('/:id', [
    check('nombre').isString().notEmpty().withMessage('El nombre no puede estar vacío si se proporciona.'),
    check('link').isString().isURL().withMessage('El link debe ser una URL válida si se proporciona.'),
    check('tipo').isString().notEmpty().withMessage('El tipo no puede estar vacío si se proporciona.'),
    validateValues
], /*authMid.validarJWT, accessMid.validarRoles('admin'),*/ controller.actualizarDocumentoProgramatico);

router.delete('/:id', /*authMid.validarJWT, accessMid.validarRoles('admin'),*/ controller.borrarDocumentoProgramatico);

module.exports = router;