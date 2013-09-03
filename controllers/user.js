var db = require('../models');

exports.login = function(req, res){
  var userID = req.params.id;
  var latlng = req.params.latlng.split('_');
  lat = latlng[0];
  lng = latlng[1];
  var findP = db.User.find(userID);
  findP.success(function (user){
    res.render('memberHome',{
      user: user,
      lat: lat,
      lng: lng
    });
  });
  findP.error(function (err){
    console.log(err);
    // handle err
  });
};