// Import express
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

const authRoutes = require('../routes/authRoutes');
const gameRoutes = require('../routes/gameRoutes');

app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/game', gameRoutes);

app.get('/', (req, res) => {
    res.send('Welcome to the War Card Game Server!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
