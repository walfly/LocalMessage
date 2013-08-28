
/**
 * Module dependencies.
 */

var express = require('express'),
    http = require('http'),
    app = require('./config/initialize.js')(),
    routes = require('./config/routes.js'),
    db = require('./models'),
    dummy = require('./migrations/dummyData.js');

routes(app);

// dummy();

db.sequelize.sync().complete(function(err) {
  if (err) {
    throw err;
  } else {
    http.createServer(app).listen(app.get('port'), function(){
      console.log('Express server listening on port ' + app.get('port'));
    });
  }
});

