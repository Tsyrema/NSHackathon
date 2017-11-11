var mongoose= require('mongoose');
var Schema = mongoose.Schema;
var searchable = require('mongoose-searchable');

var messageSchema = new Schema({
  user:String,
  message:String,
  from: String
});
messageSchema.plugin(searchable);

module.exports= mongoose.model('message',messageSchema);
