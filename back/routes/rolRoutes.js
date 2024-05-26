const {Router } = require('express');
const { check } = require('express-validator');
const controlador = require('../controllers/rolController');
const { validateValues } = require('../helpers/validar-campos');
const router = Router();

router.get('/', controlador.obtenerRoles)
router.get('/:id', controlador.obtenerRolPorId)
router.post('/',[
    check('nombre').isString().isLength({ min:1, max:50 }).notEmpty().withMessage('El nombre debe de ser un texto de máximo 50 caracteres'),
    validateValues
], controlador.crearRol)
router.put('/:id',[
    check('nombre').isString().isLength({ min:1, max:50 }).notEmpty().withMessage('El nombre debe de ser un texto de máximo 50 caracteres'),
    validateValues
], controlador.actualizarRol)
router.delete('/id', controlador.eliminarRol)

module.exports = router;