//File: controllers/tvshows.js
var mongoose = require('mongoose');  
var Poll  = mongoose.model('Poll');

//GET - Return all polls -----------------------------------------
exports.findUserPolls = function(req, res) {  
    Poll.find({'user': req.params.username},function(err, polls) {
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
   	console.log(req.body);

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
	console.log('id_ '+req.params.id)

	Poll.remove({
		_id : req.params.id
	}, function(err){
		if(err){
			return res.status(500).send( err.message);
		}else{
			res.status(200).jsonp({'message':'poll deleted'});
		}
	})

}

//PUT - Update a poll -------------------------------------------
exports.updatePoll = function(req,res){
	console.log('PUT');
	Poll.findById(req.params.id, function(err, p) {
 		if (!p)
			res.status(500).send(err.message);
		else {
			p.title = req.body.title;
			for(i=0 ; i< req.body.options.length;i++){
				console.log('option '+req.body.options[i]);
				p.options.push(req.body.options[i]);
			}
			p.save(function(err) {
		     	 if (err)
		      		res.status(500).send( err.message);
		     	 else
		       	 	res.status(200).jsonp(p);
    			});
  		}
	});	
}
