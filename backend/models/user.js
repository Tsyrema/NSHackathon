var mongoose= require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  username:{
    type:String,
    unique:true,
  },
  password: String,
  type:String
});
userSchema.methods.validPassword = function(pass) {
  console.log(pass);
  console.log(this);
  return (pass=== this.password);
};
module.exports= mongoose.model('user',userSchema);
