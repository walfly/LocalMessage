var express = require('express'),
    http = require('http'),
    path = require('path');

module.exports = function (){
  var app = express();

  // all environments
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/../views');
  app.set('view engine', 'ejs');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, '/../public')));

  return app;

}