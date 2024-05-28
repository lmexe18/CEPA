const express = require('express');
const { check } = require('express-validator');
const router = express.Router();
const controller = require('../controllers/tipoNoticiaController');
const { validateValues } = require('../helpers/validar-campos');
const authMid = require('../middlewares/validarJWT');

module.exports = router;