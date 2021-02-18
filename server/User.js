const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  userName: String,
  startDate: Date(),
});

module.exports = mongoose.model('User', userSchema);
