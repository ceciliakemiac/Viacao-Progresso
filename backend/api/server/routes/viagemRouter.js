const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

const viagemController = require('../controllers/viagemController');

router.post('/', auth, viagemController.post);

module.exports = router;
