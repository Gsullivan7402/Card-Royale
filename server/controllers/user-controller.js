// import user model
const { User } = require('../models');
// import sign token function from auth
const { signToken } = require('../utils/auth');

module.exports = {
  // get a single user by either their id or their username
  async getSingleUser({ user = null, params }, res) {
    const foundUser = await User.findOne({
      $or: [{ _id: user ? user._id : params.id }, { username: params.username }],
    });

    if (!foundUser) {
      return res.status(400).json({ message: 'Cannot find a user with this id!' });
    }

    res.json(foundUser);
  },
  // create a user, sign a token, and send it back (to client/src/components/SignUpForm.js)
  async createUser({ body }, res) {
    const user = await User.create(body);

    if (!user) {
      return res.status(400).json({ message: 'Something is wrong!' });
    }
    const token = signToken(user);
    res.json({ token, user });
  },
  // login a user, sign a token, and send it back (to client/src/components/LoginForm.js)
  // {body} is destructured req.body
  async login({ body }, res) {
    const user = await User.findOne({ $or: [{ username: body.username }, { email: body.email }] });
    if (!user) {
      return res.status(400).json({ message: "Can't find this user" });
    }

    const correctPw = await user.isCorrectPassword(body.password);

    if (!correctPw) {
      return res.status(400).json({ message: 'Wrong password!' });
    }
    const token = signToken(user);
    res.json({ token, user });
  },
  // Increment victories for a user
  async incrementVictories({ user }, res) {
    try {
      if (!user) {
        return res.status(401).json({ message: 'Authentication required' });
      }

      const updatedUser = await User.findByIdAndUpdate(
        user._id,
        { $inc: { victories: 1 } }, // Increment victories by 1
        { new: true }
      );

      if (!updatedUser) {
        return res.status(404).json({ message: 'User not found' });
      }

      return res.json(updatedUser);
    } catch (error) {
      console.error('Error incrementing victories:', error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  },
};
