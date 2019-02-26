const express = require('express');
const router = express.Router();
const parksCtrl = require('../controllers/parks');

router.get('/allParks', parksCtrl.getAllParks);


module.exports = router;