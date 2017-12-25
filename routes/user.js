var express = require('express');
var router = express.Router();
// var mongoose = require('mongoose');
var bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({ extended: true }));
var User = require('../database/schemas/User');
// var User1 = require('../models/User1');
router.use(bodyParser.json());

router.all("/*", function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
  next();
});
router.use(function (req, res, next) {
  console.log('Request URL:', req.originalUrl);
  next();
}, function (req, res, next) {
  console.log('Request Type:', req.method);
  next();
});

// var UserSchema = new mongoose.Schema({
//   firstName: {type: String, required: true},
//   lastName: {type: String, required: true},
//   userName: {type: String, required: true},
//   password: {type: String, required: true},
//   updated_date: { type: Date, default: Date.now },
// });

//   router.post('/', function (req, res) {
//     User.create({
//       firstName: req.body.firstName,
//       lastName: req.body.lastName,
//       phone : req.body.phone,
//       userName : req.body.userName,
//       password : req.body.password
//         },
//         function (err, user) {
//             if (err) return res.status(500).send("There was a problem adding the information to the database.");
//             res.status(200).send(user);
//         });
//         console.log("Server served!!");
// });

router.post('/authenticate', function (req, res) {
  User.findOne({userName:req.body.userName }, function (err, users) {

    console.log(users);
    console.log(req.body.userName + req.body.password);
      if (err) return res.status(500).send("There was a problem Authentication.");

     else if (users) {
        // users.comparePassword(req.body.password, function (err, isMatch) {
        //   console.log(err+ " "+ isMatch);
        //           if (isMatch && !err) {
        //             console.log("password matched ");
        //             res.status(200).send(users);
        //           } else {
        //               res.status(201).send('Incorrect login credentials.' );
        //           }
        //       });	
        if(users.password == req.body.password){
                      res.status(200).send(users);
                    } else {
                        res.status(201).send('Incorrect login credentials.' );
                     }

      }
      else if(!users){
      res.status(201).send(null);
      }
      
  });
//////////////////////
 // User1.findOne({ userName: req.body.userName }, function (err, user) {
    




////////////////////////
//   User.findOne({ userName: req.body.userName }, function (err, user) {
//     if (err) { res.status(400).json({ success: false, message: 'Error processing request ' + err }); }

//     if (!user) {
//       res.status(201).json({ success: false, message: 'Incorrect login credentials.' });
//     } else if (user) {
//       user.comparePassword(req.body.password, function (err, isMatch) {
//         if (isMatch && !err) {
//           var token = jwt.sign(user, config.secret, {
//             expiresIn: config.tokenexp
//           });

//           let last_login = user.lastlogin;

//           // login success update last login
//           user.lastlogin = new Date();


//           user.save(function (err) {
//             if (err) { res.status(400).json({ success: false, message: 'Error processing request ' + err }); }

//             res.status(201).json({
//               success: true,
//               message: { 'userid': user._id, 'username': user.username, 'firstname': user.firstname, 'lastlogin': last_login },
//               token: token
//             });
//           });
//         } else {
//           res.status(201).json({ success: false, message: 'Incorrect login credentials.' });
//         }
//       });
//     }
//   });
 });

/* GET ALL USERS */
router.get('/', function(req, res, next) {
  User.find(function (err, users) {
    if (err) return next(err);
    res.json(users);
  });
});

/* GET SINGLE USER BY ID */
router.get('/:id', function(req, res, next) {
  User.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* SAVE USER */
router.post('/', function(req, res, next) {
  console.log("Save user executed before error");
  User.create(req.body, function (err, post) {

    if (err) return next(err);
    console.log(post);
    console.log("Save user executed");
    res.json(post);
  });
});

/* UPDATE USER */
router.put('/:id', function(req, res, next) {
  User.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE USER */
router.delete('/:id', function(req, res, next) {
  User.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;


// exports.login = function (req, res, next) {
//   // find the user
//   User.findOne({ userName: req.body.userName }, function (err, user) {
//     if (err) { res.status(400).json({ success: false, message: 'Error processing request ' + err }); }

//     if (!user) {
//       res.status(201).json({ success: false, message: 'Incorrect login credentials.' });
//     } else if (user) {
//       user.comparePassword(req.body.password, function (err, isMatch) {
//         if (isMatch && !err) {
//           var token = jwt.sign(user, config.secret, {
//             expiresIn: config.tokenexp
//           });

//           let last_login = user.lastlogin;

//           // login success update last login
//           user.lastlogin = new Date();


//           user.save(function (err) {
//             if (err) { res.status(400).json({ success: false, message: 'Error processing request ' + err }); }

//             res.status(201).json({
//               success: true,
//               message: { 'userid': user._id, 'username': user.username, 'firstname': user.firstname, 'lastlogin': last_login },
//               token: token
//             });
//           });
//         } else {
//           res.status(201).json({ success: false, message: 'Incorrect login credentials.' });
//         }
//       });
//     }
//   });
// }