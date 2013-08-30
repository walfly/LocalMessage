bb.Views.MapView = Backbone.View.extend({
  el: '#map-canvas',

  initialize: function (){
    var self = this;
    google.maps.visualRefresh = true;
    this.pos = new google.maps.LatLng(bb.lat, bb.lng);
    var myOptions = {
      zoom: 11,
      center: this.pos,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    this.map = new google.maps.Map(this.el, myOptions);
    google.maps.event.addListenerOnce(this.map, 'idle', function(ev){
      var bounds = self.map.getBounds();
      var ne = bounds.getNorthEast();
      var sw = bounds.getSouthWest();

      self.messages = new bb.Collections.Messages({
        nelat: ne.lat(),
        nelng: ne.lng(),
        swlat: sw.lat(),
        swlng: sw.lng(),
      });
      self.messages.on('selected', self.displaySelected);
      self.render();
      self.addMarkers();
    });
  },

  displaySelected: function (model){
    this.dialogue = new bb.Views.DialogueView({model: model});
  },

  addMarkers: function (){
    this.markers = new bb.Views.MessagesView({collection: this.messages, map: this.map});
  },

  render: function (){
    return this;
  }
});