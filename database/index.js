var mongoose = require('mongoose');
var ChatModel = require('./schemas/chat');

mongoose.Promise = global.Promise;

var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost/chat-app', { useMongoClient: true, promiseLibrary: require('bluebird') })
  .then(() =>  console.log('connection succesful'))
  .catch((err) => console.error(err));

exports.chat = ChatModel;

