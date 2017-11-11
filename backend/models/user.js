var mongoose= require('mongoose');
var Schema = mongoose.Schema;
var searchable = require('mongoose-searchable');

var userSchema = new Schema({
  username:{
    type:String,
    unique:true,
  },
  password: String,
  type:String
});

module.exports= mongoose.model('user',userSchema);
