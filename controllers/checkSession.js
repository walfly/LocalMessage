exports.entry = function (req, res, next){
  var findP;
  var apiKey = process.env.GOOGLEMAPSAPI;
  if(req.session  && req.session.userID){
    console.log('has session');
    findP = db.User.find(req.session.userID)
    findP.success(function(user){
      res.render('memberHome',{
        apiKey: apiKey,
        title: 'geo message',
        user: user
      });
    });
    findP.error(function (err){
      console.log('check', err);
      res.render('index', {title: 'express', apiKey: apiKey});
    })
  } else {
    console.log('going to next call back')
    next();
  }
};

exports.member = function (req, res, next){
  if(!req.session || !req.session.userID){
    console.log('no session');
    res.redirect('/');
  } else {
    console.log('going to next callback');
    next();
  }
};

