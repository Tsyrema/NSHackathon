var mongoose= require('mongoose');
var Schema = mongoose.Schema;

var mentorSchema = new Schema({
  user:String,
  first:String,
  last:String,
  city:String,
  phone:String,


});
module.exports= mongoose.model('mentor',mentorSchema);
