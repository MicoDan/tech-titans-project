const express = require('express');
const router = express.Router();
const emailController = require('../controllers/emailController');

// Route to handle form submissions
router.post('/', emailController.sendContactEmail);

module.exports = router;
