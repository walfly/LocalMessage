var db = require('../models');

module.exports = function(req, res){
  var findP;
  if(req.session  && req.session.userID){
    findP = db.User.find(req.session.userID)
    findP.success(function(user){
      res.render('memberHome', user);
    });
    findP.error(function (err){
      console.log(err);
      //change this to error page
      res.render('index', {title: 'express', err: 2});
    })
  } else  {
    res.render('index', { title: 'Express'});
  }
};
