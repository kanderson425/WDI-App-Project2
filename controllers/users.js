const User = require('../models/user');
const Park = require('../models/park');

module.exports = {
    index,
    addPark,
    delPark
};



function index(req, res, next) { 

    res.render('users/index', {
        users,
        user: req.user,
        name: req.query.name,
        sortKey
    });

}

function addPark(req, res, next) {

}

function delPark(req, res, next) {
    
}

