var mongoose= require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  user:String,
  password: String,
  type:String
});

module.exports= mongoose.model('User',userSchema);
