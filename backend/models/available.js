var mongoose= require('mongoose');
var Schema = mongoose.Schema;
var searchable = require('mongoose-searchable');

var availableSchema = new Schema({
    username:String,
    date: Date,
});
availableSchema.plugin(searchable);

module.exports= mongoose.model('available',availableSchema);
