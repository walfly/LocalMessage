var bb = {
  Views: {},
  Models: {},
  Collections: {},
  Helpers: {},
  init: function (obj) {
    this.lat = obj.latitude || 60;
    this.lng = obj.longitude || 105;
    this.mapView = new this.Views.MapView();
  }
};