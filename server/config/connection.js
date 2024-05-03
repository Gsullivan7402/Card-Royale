const mongoose = require('mongoose');

mongoose.connect(process.env.mongodb_URI || 'mongodb://127.0.0.1:27017/tech-friends');

module.exports = mongoose.connection;