var mongoose = require('mongoose');
const Park = require('./park').schema;
var Schema = mongoose.Schema;



var userSchema = new mongoose.Schema({
    name: String,
    email: String,
    avatar: String,
    googleId: String,
    parksVisited: [Park],
    parksWished: [Park]
}, {
    timestamps: true
});



module.exports = mongoose.model('User', userSchema);