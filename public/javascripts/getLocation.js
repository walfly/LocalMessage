var getLocation = function (cb){
  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(function (position){
      var coords = {};
      coords.latitude = position.coords.latitude;
      coords.longitude = position.coords.longitude;
      cb(coords);
    });
  } else {
    // write fallback
  }
}