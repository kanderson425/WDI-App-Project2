const express = require('express');
const router = express.Router();
var request = require('request');
const parksCtrl = require('../controllers/parks');

router.get('/allParks', parksCtrl.getAllParks);


module.exports = router;