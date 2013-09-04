var bb = {
  Views: {},
  Models: {},
  Collections: {},
  Helpers: {},
  Templates: {},
  init: function (lat, lng, user) {
    this.lat = lat || 60;
    this.lng = lng || 105;
    this.mapView = new this.Views.MapView({model: user});
  }
};

var initializeBB = _.bind(bb.init, bb);

