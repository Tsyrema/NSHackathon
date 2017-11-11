var mongoose= require('mongoose');
var Schema = mongoose.Schema;
var searchable = require('mongoose-searchable');

var mentorSchema = new Schema({
  user:String,
  first:String,
  last:String,
  city:String,
  phone:String,


});
mentorSchema.plugin(searchable);

module.exports= mongoose.model('mentor',mentorSchema);
