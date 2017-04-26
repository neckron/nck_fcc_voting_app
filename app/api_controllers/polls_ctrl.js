var mongoose = require('mongoose');  
var Poll = require('../models/Poll');


//GET - Return all user polls -----------------------------------------
exports.findUserPolls = function(req, res) {  
  Poll.find({'user': req.params.username},function(err, polls) {
    if(err){
      res.send(500, err.message);
    }else{
      if(polls.length > 0) {   
        console.log('GET /polls/'+req.params.username)
        res.status(200).jsonp(polls);
      }else{
	console.log('GET /polls/'+req.params.username)
        res.status(400).jsonp(polls);		
      }
    }
  });
};

//GET - Return all polls -----------------------------------------
exports.findPolls = function(req, res) {  
  Poll.find({},function(err, polls) {
    if(err){
      res.send(500, err.message);
    }else{
      if(polls.length > 0) {   
        console.log('GET /polls')
        res.status(200).jsonp(polls);
      }else{
        console.log('GET /polls')
        res.status(400).jsonp(polls);		
      }
    }
  });
};

//POST - Create poll ----------------------------------------------
exports.createPoll = function(req , res){
  console.log('POST');
  var poll = new Poll({
    user : req.body.user,
    options : req.body.options,
    title : req.body.title
  });

  poll.save(function(err){
    if(err) {
      return res.status(500).send( err.message);
    }else{
      res.status(200).jsonp(poll);
    }
  });
}

//DELETE - Delete a poll -----------------------------------------
exports.deletePoll = function(req , res){
  console.log('DELETE');
  Poll.remove({
    _id : req.params.id
  }, function(err){
    if(err){
      return res.status(500).send( err.message);
    }else{
      res.status(200).jsonp({'message':'poll deleted'});
    }
  });
}

//PUT - Update a poll -------------------------------------------
exports.updatePoll = function(req,res){
  console.log('PUT');
  var poll ='';
  Poll.findById(req.params.id, function(err, p) {
    console.log('founded poll'+p);
    console.log('must be'+req.body);
    if (!p)
      res.status(500).send(err.message);
    else {
      poll = p;
    }
  });	

  console.log('body ' + req.body.options)  
  console.log('body ' + req.body)
  console.log('body ' + req)
 poll.save(function(err) {
   if (err)
     res.status(500).send( err.message);
   else
     res.status(200).jsonp(p);
 });

};

//GET - Get Poll by Id -------------------------------------------------
exports.findPollById = function(req,res){
  console.log('GET');
  console.log(req.params.id)
  Poll.findOne({_id : req.params.id } , function(err , p){
    if(!p){
      res.status(400).send({'message' : 'Cant find poll'});
    }else{
      res.status(200).jsonp(p);
    }
  })
}

