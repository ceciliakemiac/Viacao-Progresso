const express = require('express');
const router = express.Router();

const loginController = require('../controllers/authController');

router.post('/', loginController.login);

module.exports = router;
