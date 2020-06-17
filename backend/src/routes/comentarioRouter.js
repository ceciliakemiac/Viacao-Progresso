const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth');
const comentarioController = require('../controllers/comentarioController');

router.post('/', auth, comentarioController.create);
router.delete('/:id', auth, comentarioController.delete);

module.exports = router;
