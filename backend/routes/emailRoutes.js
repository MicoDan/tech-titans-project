const express = require('express');
const router = express.Router();
// const emailController = require('../controllers/emailController');
const {
   sendContactEmail
} = require('../controllers/emailController')

// Route to handle form submissions
router.post('/',sendContactEmail);

module.exports = router;
