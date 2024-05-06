const express = require('express');
const router = express.Router();

// Simulated game controller functions
const gameController = {
    startGame: (req, res) => res.status(200).send('Game started'),
    updateScore: (req, res) => res.status(200).send('Score updated'),
    getScores: (req, res) => res.status(200).send('Scores retrieved')
};

// Start game route
router.post('/start', gameController.startGame);

// Update score route
router.put('/update-score', gameController.updateScore);

// Get scores route
router.get('/scores', gameController.getScores);

module.exports = router;
