var mongoose = require('mongoose');
var Schema = mongoose.Schema;



var userSchema = new mongoose.Schema({
    name: String,
    email: String,
    avatar: String,
    googleId: String,
    parksVisited: [{type: Schema.Types.ObjectId, ref: 'Park'}],
    parksWished: [{type: Schema.Types.ObjectId, ref: 'Park'}]
}, {
    timestamps: true
});


var parkSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    photoURL: {
        type: String,
        required: true
    },
    url: {
        type: String
    },
    amenities: {
        type: String
    },
    comment: [{type: Schema.Types.ObjectId, ref: 'Comment'}]
}, {
timestamps: true
});

var commentSchema = new mongoose.Schema({
    content: String
}, {
    timestamps: true
});


module.exports = mongoose.model('User', userSchema);