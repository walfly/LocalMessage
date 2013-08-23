var db = require('../models');

exports.page = function (req, res){
  res.render('createAccount', { title: 'Create Account', err: req.query['err'] });
};

exports.submit = function (req, res){
  var submission = req.body,
  createP;
  if(submission.password[0] !== submission.password[1]){
    res.redirect('/createAccount?err=1');
  } else {
    createP = db.User.create({
      username: submission.username,
      password: submission.password[0],
      email: submission.email
    });
    createP.success(function (user){
      req.session.userID = user.id;
      console.log('session is', req.session.userID);
      res.render('memberHome', user);
    });
    createP.error(function (err){
      console.log(err);
      res.redirect('/createAccount?err=2');
    });
  }
};