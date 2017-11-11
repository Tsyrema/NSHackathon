var mongoose= require('mongoose');
var Schema = mongoose.Schema;

var availableSchema = new Schema({
    id:number,
    date: Date,
});
module.exports= mongoose.model('available',availableSchema);
