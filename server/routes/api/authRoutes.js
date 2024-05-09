// const express = require('express');
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');
// const Profile = require('../../models/user');

// const router = express.Router();

// // Login route
// router.post('/login', async (req, res) => {
//     try {
//         const { username, password } = req.body;

//         // Find the user by username
//         const user = await Profile.findOne({ username });

//         // If user not found or password doesn't match, return error
//         if (!user || !(await bcrypt.compare(password, user.password))) {
//             return res.status(401).json({ error: 'Invalid username or password' });
//         }

//         // If username and password are correct, create a token
//         const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);

//         // Send token to the client
//         res.status(200).json({ token });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ error: 'Internal server error' });
//     }
// });

// // Logout route
// router.post('/logout', (req, res) => {
//     try {
//         // Perform logout logic here
//         res.status(200).json({ message: 'Logout successful' });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ error: 'Internal server error' });
//     }
// });

// module.exports = router;