const { AuthenticationError } = require('apollo-server-express');
const User = require('../models/User');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
      me: async (parent, args, context) => {
          if (context.user) {
              const userData = await User.findOne({ _id: context.user._id }).select('_v -password');
              return userData;
          }
          throw new AuthenticationError('You are not currently logged in');
      },
      allUsers: async (parent, args, context) => {
          try {
              // Fetch all users from the database
              const users = await User.find();
              return users;
          } catch (error) {
              throw new Error('Failed to fetch users');
          }
      }
  },

    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);
            return { token, user };
        },
        
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw new AuthenticationError('Your username is not correct!')
            }

            const correctPassword = await user.isCorrectPassword(password);

            if (!correctPassword) {
                throw new AuthenticationError('Your password is incorrect, please try again.')
            }

            const token = signToken(user);
            return { token, user };
        },
        
        incrementVictories: async (parent, args, context) => {
            if (context.user) {
              try {
                const updatedUser = await User.findByIdAndUpdate(
                  context.user._id,
                  { $inc: { victories: 1 } }, // Increment victories by 1
                  { new: true }
                );
                return updatedUser;
              } catch (error) {
                throw new Error('Error incrementing victories');
              }
            }
            throw new AuthenticationError('You must be logged in!');
          },
    },
};


module.exports = resolvers;