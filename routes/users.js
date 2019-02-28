var express = require('express');
var router = express.Router();
var usersCtrl = require('../controllers/users');

/* GET users listing. */
// router.get('/', usersCtrl.index);

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated() ) return next();
  res.redirect('/auth/google');
}

// router.post('/', usersCtrl.visitedParks);
// router.post('/', usersCtrl.wishedParks);

module.exports = router;
