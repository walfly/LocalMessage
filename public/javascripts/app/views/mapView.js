bb.Views.MapView = Backbone.View.extend({
  el: '#map-canvas',

  initialize: function (){
    this.pos = new google.maps.LatLng(bb.lat, bb.lng);
    var myOptions = {
      zoom: 8,
      center: this.pos,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    this.map = new google.maps.Map(this.el, myOptions);
    this.messages = new bb.Collections.Messages();
    this.messages.on('selected', this.displaySelected);
    this.render();
    this.addMarkers();
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