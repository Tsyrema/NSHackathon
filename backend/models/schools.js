var mongoose=require('mongoose');
var Schema = mongoose.Schema;


var schoolSchema =  new Schema({
  user: String,
  name: String,
  address: String,
  zipCode: String,
  phoneNumber: String
});

module.exports= mongoose.model('school',schoolSchema);
