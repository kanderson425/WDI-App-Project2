var router = require('express').Router();
var passport = require('passport');
const User = require('../models/user');
const Park = require('../models/park');
var usersCtrl = require('../controllers/users');


// The root route renders our only view
router.get('/', usersCtrl.index);
// router.get('/parks', function(req, res) {
//   res.redirect('/parks');
// })

// home page route
router.get('/', function index(req, res, next) { 
  res.render('../views/index', {
      // users,
      user: req.user,
      name: req.query.name,
      // sortKey
  });
});

// about page route
router.get('/about', function index(req, res, next) { 
  res.render('../views/about', {
      // users,
      user: req.user,
      name: req.query.name,
      // sortKey
  });
});

// view user profile page route
router.get('/users/index', function index(req, res, next) { 
  res.render('../views/users/index', {
      // users,
      user: req.user,
      name: req.query.name,
      // sortKey
  });
});

// Google OAuth login route
router.get('/auth/google', passport.authenticate(
  'google',
  { scope: ['profile', 'email'] }
));

// Google OAuth callback route
router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect : '/',
    failureRedirect : '/'
  }
));

// OAuth logout route
router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});

module.exports = router;
