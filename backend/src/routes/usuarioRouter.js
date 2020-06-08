const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

const usuarioController = require('../controllers/usuarioController');

router.get('/', usuarioController.getAll);
router.get('/:id', auth, usuarioController.get);
router.post('/', usuarioController.post);

module.exports = router;
