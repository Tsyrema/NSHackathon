var mongoose= require('mongoose');
var Schema = mongoose.Schema;

var mentorSchema = new Schema({
  id:number,
  first:String,
  last:String,
  city:String,
  phone:String,


});
module.exports= mongoose.model('mentor',mentorSchema);
