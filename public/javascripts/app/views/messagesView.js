bb.Views.MessagesView = Backbone.View.extend({

  initialize: function () {
    var self = this;
    this.collection.fetch({
      success: function(){
        self.render();
      }
    });
  },

  render: function () {
    this.markers = [];
    console.log('what is going on');
    this.collection.each(function (item) {
      var latitude = item.get('latitude');
      var longitude = item.get ('longitude');
      console.log(latitude, longitude);
      var pos = new google.maps.LatLng(latitude, longitude);
      var marker = new google.maps.InfoWindow({
        map: bb.map,
        position: pos,
        content: item.message
      });
      this.markers.push(marker);
    }, this);
  }

});