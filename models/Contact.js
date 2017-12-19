var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  userName: String,
  updated_date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Contact', UserSchema);