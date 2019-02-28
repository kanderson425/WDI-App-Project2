const User = require('../models/user');
const Park = require('../models/park');

module.exports = {
    userDetails,
};

function userDetails(req, res, next) { 
    // console.log(req.user)
        res.render('./index', {
            // users,
            user: req.user,
            name: req.query.name
            // sortKey
        });
        console.log(user);
    // }    
}




