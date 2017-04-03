var mongoose = require('mongoose'),  
    Schema   = mongoose.Schema;

var pollSchema = new Schema({  
  title:    { type: String },
  user : {type : String} ,
  options:  [{ 
	  name : String , 
	  votes : Number
  		}]
});

module.exports = mongoose.model('Poll', pollSchema);  

