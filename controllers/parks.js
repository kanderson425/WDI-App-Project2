const Park = require('../models/park');
var request = require('request');
var bodyParser = require('body-parser');

module.exports = {
   getAllParks,
   getOnePark,
   createPark,
   visitedPark,
   wishedPark,
   deletePark
};

function createPark(req, res) {
  console.log(req.body, '34567890-')
    // Park.create(req.body)
    // .then(function(park) {
    //     req.user.parksVisited.push(req.body);
    // })
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
  // console.log(req.body, '12312412414')
  let newPark = Park.create(req.body);

  newPark.then((item) => {
    // console.log(req.user, 5678908765456789)
    req.user.parksVisited.push(item);
    req.user.save();
    console.log(req.user);
    res.redirect('/users/index');
  }).catch((err) => {
    console.log(err);
  })
}  

function wishedPark(req, res) {
  // console.log(req.body, '12312412414')
  let newPark = Park.create(req.body);

  newPark.then((item) => {
    // console.log(req.user, 5678908765456789)
    req.user.parksWished.push(item);
    req.user.save();
    console.log(req.user);
    res.redirect('/users/index');
  }).catch((err) => {
    console.log(err);
  })
}  
  

function deletePark(req, res) {
    req.user.parksVisited.map( (park, idx) => {
      // console.log(park._id);
      if (park._id.toString() === req.params.id) {
        console.log("found park", park._id);
        console.log(req.params.id, "req.params.id");
        req.user.parksVisited.splice(idx, 1)
      }
    }); 

    req.user.save();
    // console.log("Attempt to remove");
    // console.log(req.params.id);
    res.redirect('/users/index');
    // console.log(req.user.parksVisited[req.params.id]);
    // console.log(req.user.parksVisited)
    // req.user.parksVisited.splice(parseInt(req.params.id));
};
