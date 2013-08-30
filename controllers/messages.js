var db = require('../models'),
     _ = require('underscore');

exports.collections = function (req, res){
  var messages = db.Message.findAll();
  messages.success(function (messages){
    res.send(JSON.stringify(messages));
  });
};

exports.model = function (req, res){
  // the individual model route
};

exports.local = function (req, res){
  console.log(req.params);
};


