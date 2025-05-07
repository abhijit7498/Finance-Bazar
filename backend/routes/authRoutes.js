const express = require('express');
const router = express.Router();
const { googleLogin } = require('../controllers/authController');

// DO NOT protect this route with authMiddleware
router.post('/google-login', googleLogin);

module.exports = router;
