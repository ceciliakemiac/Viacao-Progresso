const express = require('express');
const router = express.Router();
// const auth = require('../middleware/auth');

const destinoController = require('../controllers/destinoController');

router.get('/', destinoController.getAll);
router.get('/populares', destinoController.getDestinosPopulares);
router.get('/:id', destinoController.get);
router.put('/:id', destinoController.updateNota);

module.exports = router;
