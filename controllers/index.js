
module.exports = function(req, res){
  var apiKey =  process.env.GOOGLEMAPSAPI;
  res.render('index', { title: 'Express', apiKey: apiKey });
};
