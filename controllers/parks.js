const Park = require('../models/park');
var request = require('request');
var bodyParser = require('body-parser');

module.exports = {
   getAllParks,
   getOnePark,
   createPark,
   visitedPark,
  //  wishedPark
};

function createPark(req, res) {
    Park.create(req.body).then(function(park) {
        req.user.parksVisited.push(req.body);
    })
}

function getAllParks(req, res, next) {
      var options = { method: 'GET',
      url: 'https://developer.nps.gov/api/v1/parks',
      qs: 
      { limit: '116',
        api_key: 'TnCegm5LiZi6JnDHecKG7ZoMwrIKhMpKzfoeekPZ',
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
  // }  
}

function getOnePark(req, res) {
  // var username = req.body.username || req.query.username;
  // if (!username) {
  //   return res.render('error', {userData: null});
  // } else {
    var options = { method: 'GET',
    url: 'https://developer.nps.gov/api/v1/parks',
    qs: 
    { limit: '116',
      api_key: 'TnCegm5LiZi6JnDHecKG7ZoMwrIKhMpKzfoeekPZ',
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
      console.log(filteredData[0].parkCode);
          // res.send("This will be the show page for a single park!");
      res.render('./parks/parkInfo', {
        user: req.user,
        name: req.query.name,
        filteredData
      });
    });   
  // }  
}    

function visitedPark(req, res) {
        req.user.parksVisited.push(req.body);
        res.render('./users/index', {
          user: req.user,
          name: req.query.name,
        });
        console.log(req.user.parksVisited);
        // console.log(req.body.name);
}  

// function wishedPark(req, res) {
//   // console.log(req.body, '1234567890');
//       // req.user.parksVisited.push(req.body);
//       // Park.create(req.body).then(function(park) {
//         req.user.parksWished.push(req.body);
//       // });
//         res.render('./users/index', {
//           user: req.user,
//           name: req.query.name,
//           // parksVisited: req.user.parksVisited
//         });
//       console.log(req.user.parksWished[0].name);
//     // }); 
// }   