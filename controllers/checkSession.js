module.exports = function (req, res, next){
  var findP;
  if(req.session  && req.session.userID){
    console.log('has session');
    findP = db.User.find(req.session.userID)
    findP.success(function(user){
      res.render('memberHome', user);
    });
    findP.error(function (err){
      console.log('check', err);
      var apiKey = process.env.GOOGLEMAPSAPI;
      res.render('index', {title: 'express', apiKey: apiKey});
    })
  } else {
    console.log('going to next call back')
    next();
  }
}
