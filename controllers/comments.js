var Park = require('../models/park');

module.exports = {
    create
};

function create(req, res) {
    request(options, function(err, response, body) {
        var parkData = JSON.parse(body);
        var data = JSON.parse(body).data;
        var filteredData = data.filter(park => {
          return park.parkCode === req.params.id
        }) 
        console.log(filteredData[0].parkCode);
        console.log("This is a submitted comment");
        // res.send("This will be the show page for a single park!");
        Park.findById(req.params.id, function(err, park) {
            park.comments.push(req.body);
            park.save(function(err) {
                res.redirect(`/allParks/${filteredData[0].parkCode}`);
            });
        });
    }); 
}