var db = require('../models');

exports.page = function (req, res){
  // no longer in use
  res.render('login', { title: 'Log In', err: req.query['err'] });
};

exports.submit = function (req, res){
  var submission = req.body
  console.log(submission);
  var findP = db.User.find({where: {username: submission.username}});
  findP.success(function(user){
    console.log(user);
    if(submission.password === user.password){
      req.session.userID = user.id;
      res.send(JSON.stringify(user));
    } else {
      res.send(JSON.stringify({err : '1'}));
    }
  });
  findP.error(function (err){
    console.log(err);
    res.send(JSON.stringify({err : '1'}));
  });
};
