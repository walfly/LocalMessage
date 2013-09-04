var getLocation = function (cb, user){
  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(function (position){
      var coords = {};
      coords.latitude = position.coords.latitude;
      coords.longitude = position.coords.longitude;
      if(user){
        cb(coords.latitude, coords.longitude, user);
      } else {
        cb(coords.latitude, coords.longitude);
      }
    });
  } else {
    // write fallback
  }
}