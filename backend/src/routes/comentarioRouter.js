const express = require('express');
const router = express.Router();

const comentarioController = require('../controllers/comentarioController');

router.post('/', comentarioController.create);

module.exports = router;
