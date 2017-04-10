var mongoose = require('mongoose');
var User = require('../models/User');

module.exports.profileRead = function(req, res) {

	console.log('REQ'+req.payload);
  if (!req.payload._id) {
    res.status(401).json({
      "message" : "UnauthorizedError: private profile"
    });
  } else {
    User
      .findById(req.payload._id)
      .exec(function(err, user) {
        res.status(200).json(user);
      });
  }

};

