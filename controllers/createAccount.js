exports.page = function (req, res){
  res.render('createAccount', { title: 'Create Account', err: req.query['err'] });
};

exports.submit = function (req, res){
  console.log(req.body);
};