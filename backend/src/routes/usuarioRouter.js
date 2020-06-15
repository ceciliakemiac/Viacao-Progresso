const express = require('express');
const router = express.Router();
// const auth = require('../middleware/auth');

const usuarioController = require('../controllers/usuarioController');

router.post('/', usuarioController.create);

module.exports = router;
