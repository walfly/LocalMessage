bb.Views.MapView = Backbone.View.extend({
  el: '#map-canvas',

  initialize: function (options) {
    var self = this;
    if(options.topbar){
      this.topbar = options.topbar;
    }
    this.makeMap();
    var loadCollection = _.bind(this.loadCollection, this);
    var drawUser = _.bind(this.setClientMarker, this);
    google.maps.event.addListenerOnce(this.map, 'idle', loadCollection);
    google.maps.event.addListenerOnce(this.map, 'idle', drawUser);
  },

  makeMap: function () {
    google.maps.visualRefresh = true;
    this.pos = new google.maps.LatLng(bb.lat, bb.lng);
    var myOptions = {
      zoom: 11,
      center: this.pos,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    this.map = new google.maps.Map(this.el, myOptions);
  },

  loadCollection: function (ev) {
    var bounds = this.getMapBounds();

    this.messages = new bb.Collections.Messages({
      nelat: bounds[0],
      nelng: bounds[1],
      swlat: bounds[2],
      swlng: bounds[3]
    });

    bb.Helpers.delegateMapEvents(this.map, this.mapEvents, this);
    this.messages.on('selected', this.displaySelected);

    this.render();
    this.addMarkers();
  },

  setClientMarker: function () {
    var size = new google.maps.Size(20, 20);
    this.icon = {
      scaledSize: size,
      url: '/images/blue_dot.png'
    },
    this.clientLocation = new google.maps.Marker({
      map: this.map,
      icon: this.icon,
      position: this.pos
    });
    this.setUpWatch();
  },


  mapEvents: {
    'bounds_changed': 'updateCollectionBounds'
  },

  getMapBounds: function (){
    var returnArray = [];
    var bounds = this.map.getBounds();
    var ne = bounds.getNorthEast();
    var sw = bounds.getSouthWest();
    returnArray[0] = ne.lat();
    returnArray[1] = ne.lng();
    returnArray[2] = sw.lat();
    returnArray[3] = sw.lng();
    return returnArray;
  },

  setUpWatch: function () {
    var self = this;
    if(navigator.geolocation){
      navigator.geolocation.watchPosition(function (position){
        var crd = position.coords;
        var lat = crd.latitude;
        var lng = crd.longitude;
        bb.lat = lat;
        bb.lng = lng;
        self.pos = new google.maps.LatLng(lat, lng);
        self.clientLocation.setPosition(self.pos);
      });
    }
  },

  updateCollectionBounds: function () {
    var bounds = this.getMapBounds();
    this.messages.updateBounds(bounds);
  },

  displaySelected: function (model){
    if(!this.dialogue){
      this.dialogue = new bb.Views.DialogueView({model: model});
    } else {
      this.dialogue.model = model;
      this.dialogue.render();
    }
  },

  addMarkers: function (){
    this.markers = new bb.Views.MessagesView({collection: this.messages, map: this.map});
  },

  render: function (){
    return this;
  }
});