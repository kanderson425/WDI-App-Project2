const User = require('../models/user');
const Park = require('../models/park');

module.exports = {
    userDetails,
};

function userDetails(req, res, next) { 
    console.log(req.user)
    // var username = req.body.username || req.query.username;
    // if(!username) {
    //     return res.render('error', {userData: null})
    // } else {
        res.render('./index', {
            // users,
            user: req.user,
            name: req.query.name,
            // sortKey
        });
    // }    
}




