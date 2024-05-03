const { Schema, model } = require('mongoose');

const profileSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  password: [
    {
      type: String,
      required: true,
    },
  ],
});

profileSchema.statics.isThisUsernameInUse = async function(username) {
    try {
    const user = await this.findone({username})
    if(user) return false
    
    return true;
} catch (error) {
    console.log(error.message)
    return false
}
}

const Profile = model('Profile', profileSchema);

module.exports = Profile;
