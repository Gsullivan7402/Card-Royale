// const mongoose = require('mongoose');
// const bcrypt = require('bcrypt');
// const User = require('../models/user');

// // Connect to MongoDB
// mongoose.connect('mongodb://localhost:27017/cardroyale', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
// .then(() => {
//   console.log('Connected to MongoDB');
//   // Seed data
//   const users = [
//     {
//       username: 'user1',
//       email: 'user1@example.com',
//       password: 'Password1',
//       victories: 5
//     },
//     {
//       username: 'user2',
//       email: 'user2@example.com',
//       password: 'Password2',
//       victories: 3
//     },
//     {
//       username: 'user3',
//       email: 'user3@example.com',
//       password: 'Password3',
//       victories: 7
//     }
//   ];

//   // Hash passwords before saving
//   const hashPasswords = async () => {
//     for (const user of users) {
//       const hashedPassword = await bcrypt.hash(user.password, 10);
//       user.password = hashedPassword;
//     }
//   };

//   hashPasswords()
//     .then(() => {
//       // Insert users into database
//       User.insertMany(users)
//         .then(() => {
//           console.log('Users seeded successfully');
//           // Close connection
//           mongoose.connection.close();
//         })
//         .catch((err) => {
//           console.error('Error seeding users:', err);
//           mongoose.connection.close();
//         });
//     })
//     .catch((err) => {
//       console.error('Error hashing passwords:', err);
//       mongoose.connection.close();
//     });
// })
// .catch((err) => {
//   console.error('Error connecting to MongoDB:', err);
// });