var express = require('express');
var router = express.Router();
var PollsCtrl = require('../api_controllers/polls_ctrl.js');
var ctrlAuth = require('../api_controllers/authentication.js');

	
router.route('/polls').post(PollsCtrl.createPoll);

router.route('/polls/:id')
	.delete(PollsCtrl.deletePoll)
	.put(PollsCtrl.updatePoll);

router.route('/polls/:username')
	.get(PollsCtrl.findUserPolls);

router.post('/user/register', ctrlAuth.register);
router.post('/user/login', ctrlAuth.login);

router.get('/user/profile', auth, ctrlProfile.profileRead);

module.exports = router;




/*
var jwt = require('express-jwt');
var auth = jwt({
  secret: 'MY_SECRET',
  userProperty: 'payload'
});*/


