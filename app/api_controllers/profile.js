var mongoose = require('mongoose');
var User = require('../models/User1');

module.exports.profileRead = function(req, res) {

  if (!req.params.id) {
    res.status(401).json({
      "message" : "UnauthorizedError: private profile"
    });
  } else {
    User
      .findById(req.params.username)
      .exec(function(err, user) {
        res.status(200).json(user);
      });
  }

};

