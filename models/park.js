var mongoose = require('mongoose');

var commentSchema = new mongoose.Schema({
    text: String
}, {
    timestamps: true
});

var parkSchema = new mongoose.Schema({
    name: String,
    description: String,
    location: String,
    photoURL: String,
    amenities

}, {
timestamps: true
});



module.exports = mongoose.model('Park', parkSchema);