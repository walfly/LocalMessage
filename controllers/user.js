var db = require('../models');

exports.login = function(req, res){
  var userID = req.params.id;
  var latlng = req.params.latlng.split('_');
  lat = latlng[0];
  lng = latlng[1];
  var findP = db.User.find({
    where: {
      id: userID
    },
    attributes: ['id', 'email', 'username']
  });
  findP.success(function (user){
    console.log(user.values);
    res.render('memberHome', {
      title: 'geo message',
      user: user.values,
      lat: lat,
      lng: lng,
      apiKey: process.env.GOOGLEMAPSAPI,
    });
  });
  findP.error(function (err){
    console.log(err);
    // handle err
  });
};