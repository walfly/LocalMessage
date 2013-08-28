bb.Views.MapView = Backbone.View.extend({
  el: '#map-canvas',
  initialize: function (){
    this.pos = new google.maps.LatLng(bb.lat, bb.lng);
    console.log(this.pos);
    var myOptions = {
      zoom: 8,
      center: this.pos,
      mapTypeControl: true,
      mapTypeControlOptions: {style: google.maps.MapTypeControlStyle.DROPDOWN_MENU},
      navigationControl: true,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    this.map = new google.maps.Map(this.el, myOptions);
    this.render();
    this.addMarkers();
  },

  addMarkers: function (){
    var messages = new bb.Collections.Messages();
    this.markers = new bb.Views.MessagesView({collection: messages, map: this.map});
  },

  render: function (){
    return this;
  }
});