const Park = require('../models/park');
var request = require('request');
var bodyParser = require('body-parser');

module.exports = {
   getAllParks,
   getOnePark,
   createPark
};

function createPark(req, res) {
    Park.create(req.body).then(function(park) {
        res.status(201).json(park);
    })
    console.log(req.body);
}

function getAllParks(req, res, next) {
  // console.log('HELLO')
    // Park.find({}).then(function(parks) {
    //     res.status(200).json(parks);
    // });
    var options = { method: 'GET',
    url: 'https://developer.nps.gov/api/v1/parks',
    qs: 
     { parkCode: 'zion',
       api_key: 'TnCegm5LiZi6JnDHecKG7ZoMwrIKhMpKzfoeekPZ',
       fields: 'fullName,images,states,description,url' },
    headers: 
     { 'Postman-Token': 'd0adc330-b040-4d99-bc79-fec9fdd73c97',
       'cache-control': 'no-cache',
       'Content-Type': 'application/json' } };
  
  request(options, function(err, response, body) {
    var parkData = JSON.parse(body);
    console.log(parkData.data[0].name);
    res.render('parks/allParks', {parkData: parkData});
    // res.send('THIS IS A TEST');
  });
}

function getOnePark(req, res) {
    Park.findById(req.params.id).then(function(park) {
        res.status(200).json(park);
    });
}