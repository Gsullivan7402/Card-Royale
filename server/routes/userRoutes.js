const Profile = require('./models/user');
const express = require('express');
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

app.post('/create-profile', async (req, res) => {
    try {
        // Extract data from request body
        const { username, password } = req.body;
        
        // Create a new Profile instance with the received data
        const profile = new Profile({
            username: username,
            password: password
        });
        
        // Save the profile to the database
        await profile.save();
        
        // Respond with success message
        res.status(201).json({ message: 'Profile created successfully' });
    } catch (error) {
        // If there's an error, respond with an error message
        res.status(500).json({ error: 'Failed to create profile' });
    }
});