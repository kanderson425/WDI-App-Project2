const User = require('../models/user');
const Park = require('../models/park');

module.exports = {
    index,
    addPark,
    delPark
};



function index(req, res, next) { 
    console.log(req.query)
    res.render('./index', {
        // users,
        user: req.user,
        name: req.query.name,
        // sortKey
    });

}

function addPark(req, res, next) {

}

function delPark(req, res, next) {
    
}

