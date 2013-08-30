bb.Views.MessageView = Backbone.View.extend({
  initialize: function (options) {
    this.map = options.map;
    var latitude = this.model.get('latitude');
    var longitude = this.model.get('longitude');
    var pos = new google.maps.LatLng(latitude, longitude);
    this.marker = new google.maps.Marker({
      map : this.map,
      position : pos,
    });
    bb.Helpers.delegateMapEvents(this.marker, this.markerEvents, this);
    this.render();
  },

  markerEvents: {
    'click' : 'displayDialogue'
  },

  displayDialogue : function (){
    this.model.trigger('selected', this.model);
  },

  render: function (){
    return this;
  }
})