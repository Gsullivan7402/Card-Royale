const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, 'Must use a valid email address'],
    },
    password: {
      type: String,
      required: true,
    },
    victories: {
      type: Number,
      default: 0
    }
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

// custom method to compare and validate password for logging in
userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

userSchema.methods.incrementVictories = async function () {
  this.victories++;
  await this.save();
};

const User = model('User', userSchema);

module.exports = User;
