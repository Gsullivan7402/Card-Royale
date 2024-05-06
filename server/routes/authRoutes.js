const express = require('express');
const router = express.Router();

// Simulated authentication controller functions
const userController = {
    register: (req, res) => res.status(201).send('User registered'),
    login: (req, res) => res.status(200).send('User logged in'),
    refresh: (req, res) => res.status(200).send('Token refreshed')
};

// Register route
router.post('/register', userController.register);

// Login route
router.post('/login', userController.login);

// Refresh token route
router.post('/refresh-token', userController.refresh);

module.exports = router;
