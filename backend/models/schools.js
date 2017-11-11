var mongoose=require('mongoose');
var Schema = mongoose.Schema;
var searchable = require('mongoose-searchable');

var schoolSchema =  new Schema({
  user: String,
  name: String,
  address: String,
  zipCode: String,
  city:String,
  phoneNumber: String
});
schoolSchema.plugin(searchable);


module.exports= mongoose.model('school',schoolSchema);
