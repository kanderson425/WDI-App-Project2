const express = require('express');
const router = express.Router();
var request = require('request');
const parksCtrl = require('../controllers/parks');


router.get('/allParks', parksCtrl.getAllParks);
router.get('/allParks/:id', parksCtrl.getOnePark);
router.post('/users/index/visitedParks', isLoggedIn, parksCtrl.visitedPark);
router.post('/users/index/wishedParks', isLoggedIn, parksCtrl.wishedPark);
router.delete('/users/index/:id/deleteVisitedPark', parksCtrl.deleteVisitedPark);
router.delete('/users/index/:id/deleteWishedPark', parksCtrl.deleteWishedPark);

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated() ) return next();
    res.redirect('/auth/google');
  }

module.exports = router;