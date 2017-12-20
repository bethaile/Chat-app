var mongoose = require('mongoose');

var ContactSchema = new mongoose.Schema({
  userName: String,
  updated_date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Contact', ContactSchema);