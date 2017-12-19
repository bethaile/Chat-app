var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  userName: String,
  password: String,
  updated_date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('User', UserSchema);
