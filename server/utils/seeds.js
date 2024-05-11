const bcrypt = require('bcrypt');
const User = require('../models/User');

const seedUsers = async () => {
  try {
    // Create users data with hashed passwords
    const usersData = [
      {
        username: 'Bobby',
        email: 'bobby@example.com',
        password: 'password123',
        victories: 5,
      },
      {
        username: 'frank',
        email: 'frank@example.com',
        password: 'securePassword',
        victories: 10,
      },
    ];

    // Hash passwords concurrently
    const hashedUsersData = await Promise.all(usersData.map(async (user) => {
      const hashedPassword = await bcrypt.hash(user.password, 10);
      return { ...user, hashedPassword };
    }));

    // Create users in the database
    await User.insertMany(hashedUsersData);

    console.log('Seed data created successfully');
  } catch (error) {
    console.error('Error seeding data:', error);
  }
};

// seedUsers();
module.exports = seedUsers;