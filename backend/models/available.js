var mongoose= require('mongoose');
var Schema = mongoose.Schema;

var availableSchema = new Schema({
    username:String,
    date: Date,
});
module.exports= mongoose.model('available',availableSchema);
