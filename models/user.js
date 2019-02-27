var mongoose = require('mongoose');



var userSchema = new mongoose.Schema({
    name: String,
    email: String,
    avatar: String,
    googleId: String,
    // parksVisited: [parkSchema]
}, {
    timestamps: true
});


// var parkSchema = new mongoose.Schema({
//     name: {
//         type: String,
//         required: true
//     },
//     description: {
//         type: String,
//         required: true
//     },
//     location: {
//         type: String,
//         required: true
//     },
//     photoURL: {
//         type: String,
//         required: true
//     },
//     url: {
//         type: String
//     },
//     amenities: {
//         type: String
//     },
//     comment: [commentSchema]
// }, {
// timestamps: true
// });

// var commentSchema = new mongoose.Schema({
//     text: String
// }, {
//     timestamps: true
// });


module.exports = mongoose.model('User', userSchema);