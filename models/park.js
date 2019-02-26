var mongoose = require('mongoose');

var commentSchema = new mongoose.Schema({
    text: String
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
    comment: [commentSchema]
}, {
timestamps: true
});


module.exports = mongoose.model('Park', parkSchema);