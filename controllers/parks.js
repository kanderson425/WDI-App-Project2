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
    var options = { method: 'GET',
    url: 'https://developer.nps.gov/api/v1/parks',
    qs: 
     { api_key: 'TnCegm5LiZi6JnDHecKG7ZoMwrIKhMpKzfoeekPZ',
       fields: 'fullName,images,states,description,url,designation', 
       q: 'National%Park' },
    headers: 
     { 'Postman-Token': 'd0adc330-b040-4d99-bc79-fec9fdd73c97',

       'Content-Type': 'application/json' } };
  
  request(options, function(err, response, body) {
    var parkData = JSON.parse(body);
    // console.log(parkData.data[0].name);
    res.render('parks/allParks', {
        //users,
        user: req.user,
        name: req.query.name,
        //sortKey
        parkData: parkData
      });
      // console.log(parkData.data[0].url);
  });
}

function getOnePark(req, res) {
  var options = { method: 'GET',
  url: 'https://developer.nps.gov/api/v1/parks',
  qs: 
   { api_key: 'TnCegm5LiZi6JnDHecKG7ZoMwrIKhMpKzfoeekPZ',
     fields: 'fullName,images,states,description,url,designation', 
     q: 'National%Park' },
  headers: 
   { 'Postman-Token': 'd0adc330-b040-4d99-bc79-fec9fdd73c97',

     'Content-Type': 'application/json' } };

  request(options, function(err, response, body) {
    var parkData = JSON.parse(body);
    var data = JSON.parse(body).data;
    var filteredData = data.filter(park => {
      return park.parkCode === req.params.id
    }) 
    console.log(filteredData[0]);
        // res.send("This will be the show page for a single park!");
    res.render('./parks/parkInfo', {
      user: req.user,
      name: req.query.name,
      filteredData
    });
  });   
}    