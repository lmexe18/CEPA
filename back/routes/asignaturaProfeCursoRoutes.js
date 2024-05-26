const express = require('express');
const { check } = require('express-validator');
const router = express.Router();
const controller = require('../controllers/asignaturaProfeCursoController');
const { validateValues } = require('../helpers/validar-campos');
const authMid = require('../middlewares/validarJWT');
const accessMid = require('../middlewares/validarRoles');

router.get('/', controller.obtenerAsignaturasProfesCursos);
router.get('/:id', controller.obtenerAsignaturaProfeCursoPorId);
router.get('/curso/:cursoId', controller.obtenerInfoDeCurso);
router.get('/profesor/:usuarioId', controller.obtenerInfoDeProfesor);
router.get('/asignatura/:asignaturaId', controller.obtenerInfoDeAsignatura);
router.post('/', [
    check('idAsignatura').isInt({ min: 1 }).notEmpty().withMessage('El id de asignatura debe de ser un número entero mayor a 0.'),
    check('idUsuario').isInt({ min: 1}).notEmpty().withMessage('El id de usuario debe de ser un número entero mayor a 0.'),
    check('idCurso').isInt({ min: 1}).notEmpty().withMessage('El id del curso debe de ser un número entero mayor a 0.'),
    validateValues
], /*authMid.validarJWT,*/ controller.subirAsignaturaProfeCurso);
router.delete('/:id', authMid.validarJWT, controller.borrarAsignaturaProfeCurso);

module.exports = router;