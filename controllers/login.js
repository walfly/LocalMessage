exports.page = function (req, res){
  res.render('login', { title: 'Log In', err: req.query['err'] });
};
