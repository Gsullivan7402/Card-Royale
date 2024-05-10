const bcrypt = require('bcrypt');
const User = require('../models/User');

const seedUsers = async () => {
  try {
    // Create users
    const usersData = [
      {
        username: 'user1',
        email: 'user1@example.com',
        password: 'password123',
        victories: 5,
      },
      {
        username: 'user2',
        email: 'user2@example.com',
        password: 'securePassword',
        victories: 10,
      },
    ];

    const usersWithHashedPasswords = await Promise.all(usersData.map(async (user) => {
      const hashedPassword = await bcrypt.hash(user.password, 10);
      return {
        ...user,
        hashedPassword,
      };
    }));

    await User.create(usersWithHashedPasswords);

    console.log('Seed data created successfully');
  } catch (error) {
    console.error('Error seeding data:', error);
  }
};

seedUsers()
module.exports = seedUsers;