const express = require('express');
const router = express.Router();
var request = require('request');
const parksCtrl = require('../controllers/parks');

router.get('/allParks', parksCtrl.getAllParks);
router.get('/allParks/:id', parksCtrl.getOnePark);
router.post('/users/index/visitedParks', parksCtrl.visitedPark);
router.post('/users/index/wishedParks', parksCtrl.wishedPark);
router.delete('/users/index/:id/deleteVisitedPark', parksCtrl.deleteVisitedPark);
router.delete('/users/index/:id/deleteWishedPark', parksCtrl.deleteWishedPark);


module.exports = router;