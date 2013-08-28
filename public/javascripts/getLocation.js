var getLocation = function (){
  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(function (position){
      var coords = {};
      coords.latitude = position.coords.latitude;
      coords.longitude = position.coords.longitude;
      bb.init(coords);
    });
  } else {
    // right fallback
  }
}