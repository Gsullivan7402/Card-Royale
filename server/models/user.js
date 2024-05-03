const { Schema, model } = require('mongoose');

const profileSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  password:
    {
      type: String,
      required: true,
      match: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
    },
});

profileSchema.statics.isThisUsernameInUse = async function(username) {
    try {
        const user = await this.findOne({ username });
        if (user) return true; // Username is already in use
        return false; // Username is not in use
    } catch (error) {
        console.log(error.message);
        return false; // Error occurred, treat as if the username is in use
    }
};

const Profile = model('Profile', profileSchema);

module.exports = Profile;
