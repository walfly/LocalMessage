bb.Views.MapView = Backbone.View.extend({
  el: '#map-canvas',

  initialize: function (){
    var self = this;
    this.login = new bb.Views.LoginView();
    this.makeMap();
    var loadCollection = _.bind(this.loadCollection, this);
    google.maps.event.addListenerOnce(this.map, 'idle', loadCollection);
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

  updateCollectionBounds: function (){
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