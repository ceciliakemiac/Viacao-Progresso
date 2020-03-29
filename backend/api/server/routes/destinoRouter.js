const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

const destinoController = require('../controllers/destinoController');

router.get('/', destinoController.getAll);
router.get('/:id', destinoController.get);
router.put('/:id', auth, destinoController.update);

module.exports = router;
