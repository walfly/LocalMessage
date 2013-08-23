var db = require('../models');

exports.page = function (req, res){
  res.render('login', { title: 'Log In', err: req.query['err'] });
};

exports.submit = function (req, res){
  var submission = req.body
  var findP = db.User.find({where: {username: submission.username}});
  findP.success(function(user){
    if(submission.password === user.password){
      req.session.userID = user.id;
      res.render('memberHome', user);
    } else {
      res.redirect('/login?err=1');
    }
  });
  findP.error(function (err){
    console.log(err);
    res.redirect('/login?err=1');
  })
}
