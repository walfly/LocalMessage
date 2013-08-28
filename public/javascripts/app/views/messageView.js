bb.Views.MessageView = Backbone.View.extend({
  initialize: function (options) {
    this.map = options.map;
    var latitude = this.model.get('latitude');
    var longitude = this.model.get('longitude');
    var pos = new google.maps.LatLng(latitude, longitude);
    this.infoWindow = new google.maps.InfoWindow({
      map : this.map,
      position : pos,
      content : 'content'
    });
    this.render();
  },

  render: function (){
    return this;
  }
})