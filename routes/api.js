const express = require('express');
const router = express.Router();
var request = require('request');
const parksCtrl = require('../controllers/parks');

router.get('/allParks', parksCtrl.getAllParks);
router.get('/allParks/:id', parksCtrl.getOnePark);
router.post('/', parksCtrl.visitedPark);
router.post('/', parksCtrl.wishedPark);


module.exports = router;