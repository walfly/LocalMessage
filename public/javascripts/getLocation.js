var getPos = function (cb){
  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(function (position){
      var coords = {};
      coords.latitude = position.coords.latitude;
      coords.longitude = position.coords.longitude;
      cb(coords);
    });
  } else {
    // right fallback
  }
}