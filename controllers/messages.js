var db = require('../models');

exports.collections = function (req, res){
  var messages = db.Message.findAll();
  messages.success(function (messages){
    res.send(JSON.stringify(messages));
  });
};