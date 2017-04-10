var express = require('express');
var PollsCtrl = require('../api_controllers/polls_ctrl.js');
var ctrlAuth = require('../api_controllers/authentication.js');
var ctrlProfile = require('../api_controllers/profile.js');
var jwt = require('jsonwebtoken');

var router = express.Router();

router.post('/user/login', ctrlAuth.login);

router.use(function(req, res, next) {

  // check header or url parameters or post parameters for token
  var token = req.body.token || req.query.token || req.headers['x-access-token'];

  // decode token
  if (token) {
    // verifies secret and checks exp
    jwt.verify(token, 'MY_SECRET', function(err, decoded) {      
      if (err) {
        return res.json({ success: false, message: 'Failed to authenticate token.' });    
      } else {
        // if everything is good, save to request for use in other routes
        req.decoded = decoded;    
        next();
      }
    });

  } else {

    // if there is no token
    // return an error
    return res.status(403).send({ 
        success: false, 
        message: 'No token provided.' 
    });
    
  }
});
	
router.route('/polls').post(PollsCtrl.createPoll);

router.route('/polls/:id')
	.delete(PollsCtrl.deletePoll)
	.put(PollsCtrl.updatePoll);

router.route('/polls/:username')
	.get(PollsCtrl.findUserPolls);

router.post('/user/register', ctrlAuth.register);


router.get('/user/profile', ctrlProfile.profileRead);

module.exports = router;

