// server.js

    // set up ========================
    var express  = require('express');
    var app      = express();                               // create our app w/ express
    var mongoose = require('mongoose');                     // mongoose for mongodb
    var morgan = require('morgan');             // log requests to the console (express4)
    var bodyParser = require('body-parser');    // pull information from HTML POST (express4)
    var methodOverride = require('method-override'); // simulate DELETE and PUT (express4)
    require('dotenv').config()

    // configuration =================

    app.use(express.static(__dirname + '/public'));                 // set the static files location /public/img will be /img for users
    app.use(morgan('dev'));                                         // log every request to the console
    app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
    app.use(bodyParser.json());                                     // parse application/json
    app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
    app.use(methodOverride());

    // routes
    require('./models/Poll');
    var PollsCtrl = require('./api_controllers/polls_ctrl');
    var polls_route = express.Router();
    
    polls_route.route('/polls')
	.post(PollsCtrl.createPoll);

    polls_route.route('/polls/:id')
	.delete(PollsCtrl.deletePoll)
	.put(PollsCtrl.updatePoll);

    polls_route.route('/polls/:username')
	.get(PollsCtrl.findUserPolls);

    app.use('/api', polls_route);  

    // listen (start app with node server.js) ======================================
  mongoose.connect(process.env.MONGOURI, function(err, res) {  
  if(err) {
    console.log('ERROR: connecting to Database. ' + err);
  }
  app.listen(process.env.PORT, function() {
    console.log("Node server running on port "+process.env.PORT);
  });
});
