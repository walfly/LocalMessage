bb.map = function (){
  var handleNoGeolocation = function(flag){
    if (flag){
      var content = 'geolocation service failed';
    } else {
      var content = 'your browser does not support geolocation'
    }

    var options = {
      map: map,
      position: new google.maps.LatLng(60, 105),
      content: content
    }
    var infoWindow = new google.maps.infoWindow(options);
    map.setCenter(options.position);
  };
  var mapOptions = {
    zoom: 9,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };

  var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
  // Try HTML5 geolocation
  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(function(position) {
      console.log('latitude',position.coords.latitude, 'longitude', position.coords.longitude);
      var pos = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

      // var infoWindow = new google.maps.InfoWindow({
      //   map: map,
      //   position: pos,
      //   content: 'location found using html5'
      // });

      map.setCenter(pos);
      return map;
    });
  }
}
