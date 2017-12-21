var mongoose = require('mongoose');

var ContactSchema = new mongoose.Schema({
  userName: String,
  updated_date: { type: Date, default: Date.now },
  contactUserName: String,
});

module.exports = mongoose.model('Contact', ContactSchema);