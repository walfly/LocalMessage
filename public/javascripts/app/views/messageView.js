bb.Views.MessageView = Backbone.View.extend({
  initialize: function (options) {
    this.map = options.map;
    if(options.marker){
      this.marker = options.marker;
    } else {
      this.createMarker();
    }
    bb.Helpers.delegateMapEvents(this.marker, this.markerEvents, this);
    this.render();
  },

  createMarker: function(){
    var latitude = this.model.get('latitude');
    var longitude = this.model.get('longitude');
    var pos = new google.maps.LatLng(latitude, longitude);
    this.marker = new google.maps.Marker({
      map : this.map,
      position : pos,
    });
  },

  markerEvents: {
    'click' : 'displayDialogue'
  },

  displayDialogue: function (){
    this.model.trigger('selected', this.model);
  },

  removeView: function (){
    google.maps.event.clearInstanceListeners(this.marker);
    this.remove();
  },

  render: function (){
    return this;
  }
})