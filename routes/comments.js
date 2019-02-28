var express = require('express');
var router = express.Router();
var commentsCtrl = require('../controllers/comments');

router.post('/allParks/:id', commentsCtrl.create);

module.exports = router;