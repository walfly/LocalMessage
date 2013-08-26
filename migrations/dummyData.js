var db = require('../models'),
    _  = require('underscore');

// latitude 40.7150728 longitude -73.9363004

var users = [
  {username: 'walfly',
   password: 'supersecret',
   email: 'walker.d.flynn@gmail.com'},
   {username: 'Moose',
   password: 'supersecret',
   email: 'moose@gmail.com'},
   {username: 'Cow',
   password: 'supersecret',
   email: 'cow@gmail.com'},
   {username: 'Pigeon',
   password: 'supersecret',
   email: 'Pigeon@gmail.com'},
   {username: 'Fox',
   password: 'supersecret',
   email: 'Fox@gmail.com'},
   {username: 'Carrot',
   password: 'supersecret',
   email: 'Carrot@gmail.com'},
   {username: 'Dog',
   password: 'supersecret',
   email: 'Dog@gmail.com'}
];

var myMessages = [{
  latitude: 40.111,
  longitude: -73.9,
  message: "MESSAGE MESSAGE MESSAGE MESSAGE MESSAGE MESSAGE"
  },
  {
  latitude: 40.9,
  longitude: -74.1,
  message: "MESSAGE MESSAGE MESSAGE MESSAGE MESSAGE MESSAGE"
  },
  {
  latitude: 41.111,
  longitude: -73.00001,
  message: "MESSAGE MESSAGE MESSAGE MESSAGE MESSAGE MESSAGE"
  }
];

var dogMessages = [{
  latitude: 46.111,
  longitude: -73.9,
  message: "MESSAGE MESSAGE MESSAGE MESSAGE MESSAGE MESSAGE"
  },
  {
  latitude: 39.9,
  longitude: -74.1,
  message: "MESSAGE MESSAGE MESSAGE MESSAGE MESSAGE MESSAGE"
  },
  {
  latitude: 41.111,
  longitude: -73.00001,
  message: "MESSAGE MESSAGE MESSAGE MESSAGE MESSAGE MESSAGE"
  }
];

var carrotMessages = [{
  latitude: 45,
  longitude: -73.9,
  message: "MESSAGE MESSAGE MESSAGE MESSAGE MESSAGE MESSAGE"
  },
  {
  latitude: 43.9,
  longitude: -74.1,
  message: "MESSAGE MESSAGE MESSAGE MESSAGE MESSAGE MESSAGE"
  },
  {
  latitude: 41.111,
  longitude: -74.00001,
  message: "MESSAGE MESSAGE MESSAGE MESSAGE MESSAGE MESSAGE"
  }
];

var foxMessages = [{
  latitude: 41.111,
  longitude: -73.9,
  message: "MESSAGE MESSAGE MESSAGE MESSAGE MESSAGE MESSAGE"
  },
  {
  latitude: 39.9,
  longitude: -74.1,
  message: "MESSAGE MESSAGE MESSAGE MESSAGE MESSAGE MESSAGE"
  },
  {
  latitude: 43.111,
  longitude: -73.00001,
  message: "MESSAGE MESSAGE MESSAGE MESSAGE MESSAGE MESSAGE"
  }
];

var cowMessages = [{
  latitude: 40,
  longitude: -73.9666,
  message: "MESSAGE MESSAGE MESSAGE MESSAGE MESSAGE MESSAGE"
  },
  {
  latitude: 43,
  longitude: -74.3,
  message: "MESSAGE MESSAGE MESSAGE MESSAGE MESSAGE MESSAGE"
  },
  {
  latitude: 42.111,
  longitude: -73.5000,
  message: "MESSAGE MESSAGE MESSAGE MESSAGE MESSAGE MESSAGE"
  }
];

var mooseMessages = [{
  latitude: 43,
  longitude: -72.9666,
  message: "MESSAGE MESSAGE MESSAGE MESSAGE MESSAGE MESSAGE"
  },
  {
  latitude: 43.5,
  longitude: -74.2222,
  message: "MESSAGE MESSAGE MESSAGE MESSAGE MESSAGE MESSAGE"
  },
  {
  latitude: 42.109,
  longitude: -73.7500,
  message: "MESSAGE MESSAGE MESSAGE MESSAGE MESSAGE MESSAGE"
  }
];

var pigeonMessages = [{
  latitude: 42.2222,
  longitude: -72.6666,
  message: "MESSAGE MESSAGE MESSAGE MESSAGE MESSAGE MESSAGE"
  },
  {
  latitude: 43.61111,
  longitude: -75.2222,
  message: "MESSAGE MESSAGE MESSAGE MESSAGE MESSAGE MESSAGE"
  },
  {
  latitude: 42.1000,
  longitude: -73.8111,
  message: "MESSAGE MESSAGE MESSAGE MESSAGE MESSAGE MESSAGE"
  }
];


module.exports = function(){
  db.User.find({where: {username: 'Dog'}})
    .success(function (pigeon){
      _.each(dogMessages, function(message){
        db.Message.create({
          latitude: message.latitude,
          longitude: message.longitude,
          message: message.message
        }).success(function(message){
          message.setAuthor(pigeon);
          pigeon.addMessage(message);
        });
      });
    });
}