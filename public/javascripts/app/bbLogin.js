var bb = {
  Views: {},
  Models: {},
  Collections: {},
  Helpers: {},
  Templates: {},
  init: function (lat, lng) {
    this.lat = lat || 60;
    this.lng = lng || 105;
    var view = new this.Views.LoginView();
    this.mapView = new this.Views.MapView({topbar: view});
  }
};

var initializeBB = _.bind(bb.init, bb);

