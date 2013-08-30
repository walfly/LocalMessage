var db = require('../models'),
     _ = require('underscore');

exports.collections = function (req, res){
  var messagesP = db.Message.findAll();
  messagesP.success(function (messages){
    res.send(JSON.stringify(messages));
  });
};

exports.model = function (req, res){
  // the individual model route
};

exports.local = function (req, res){
  var bot = req.params.bot.split('_');
  var top = req.params.top.split('_');
  top[0] = parseFloat(top[0]);
  top[1] = parseFloat(top[1]);
  bot[0] = parseFloat(bot[0]);
  bot[1] = parseFloat(bot[1]);
  if(top[0] > bot[0]){
    var glat = top[0];
    var llat = bot[0];
  } else {
    var glat = bot[0];
    var llat = top[0];
  }
  if(top[1] > bot[1]){
    glng = top[1];
    llng = bot[1];
  } else {
    glng = bot[1];
    llng = top[1];
  }
  var messagesP = db.Message.findAll({
    where: {
      latitude : {
        between: [llat, glat]
      },
      longitude : {
        between: [llng, glng]
      }
    }
  });
  messagesP.success(function (messages){
    console.log(JSON.stringify(messages));
    res.send(JSON.stringify(messages));
  });
};


