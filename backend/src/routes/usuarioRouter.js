const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

const usuarioController = require('../controllers/usuarioController');

router.post('/', usuarioController.create);
router.post('/ondefui', auth, usuarioController.addDestino);
router.post('/queroir', auth, usuarioController.addWantedDestino);
router.get('/destinos', auth, usuarioController.getUsuarioDestinos);
router.delete('/ondefui/:id', auth, usuarioController.deleteDestino);

module.exports = router;
