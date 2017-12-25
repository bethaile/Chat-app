// var express = require('express');
// var path = require('path');
// var favicon = require('serve-favicon');
// var logger = require('morgan');
// var bodyParser = require('body-parser');

// var user = require('./routes/user');
// var contact = require('./routes/contact');
// var app = express();

// //////////////////
// var app1 = express();
// var server1 = require('http').createServer(app1);
// var io = require('socket.io').listen(server1);
// users = [];
// connections = [];
// server1.listen(3005 );
// app1.get('/', function(req, res){
//     res.sendFile(__dirname + '/chat.html');
// });


// io.sockets.on ('connection', function(socket){
//   connections.push(socket);
//   console.log('connected : % sockets connected', connections.length);

// //Disconnect
//   socket.on('disconnect', function(data){
//       if(!socket.username) return;
//       users.splice(users.indexOf(socket.username), 1);
//       updateUsernames();
//       connections.splice(connections.indexOf(socket), 1);
//       console.log('Disconnected: %s sockets connected', connections.length)
//   });

//   socket.on ('send message', function(data){
//       io.sockets.emit('new message', {msg:data, user: socket.username});
//   });

//   socket.on('new user', function(data, callback){
//       callback(true);
//       socket.username = data;
      
//       users.push(socket.username);
//       updateUsernames();
//   })

//   function updateUsernames(){
//       io.sockets.emit('get users', users);
//   }
  
// });
// /////////////

// var mongoose = require('mongoose');
// mongoose.Promise = require('bluebird');
// mongoose.connect('mongodb://localhost/chat-app', { useMongoClient: true, promiseLibrary: require('bluebird') })
//   .then(() =>  console.log('connection succesful'))
//   .catch((err) => console.error(err));

// app.use(logger('dev'));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({'extended':'false'}));
// app.use(express.static(path.join(__dirname, 'dist')));
// app.use('/users', express.static(path.join(__dirname, 'dist')));
// app.use('/user', user);
// app.use('/contacts', express.static(path.join(__dirname, 'dist')));
// app.use('/contact', contact);

// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   var err = new Error('Not Found');
//   err.status = 404;
//   next(err);
// });

// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

// module.exports = app;
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');

var bodyParser = require('body-parser');
var mongo = require('mongoskin');
var cors = require('cors');
var jwt = require('express-jwt');
var jwks = require('jwks-rsa');

var db = require('./database');

var chat = require('./routes/chat');
var contact = require('./routes/contact');
var user= require('./routes/user');
var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended':'false'}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'dist')));
app.use(cors());

app.use('/chat', chat);
app.use('/user', user);
app.use('/contact', contact);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// Send all other requests to the Angular app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});


// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);

	res.json({
		message: res.locals.message,
    error: {}
	});
//  res.render('error');
});

module.exports = app;
