bb.Views.MessagesView = Backbone.View.extend({

  initialize: function (options) {
    this.map = options.map;
    var self = this;
    console.log(this);
    this.collection.fetch({
      success: function(){
        self.render();
      }
    });
  },

  render: function () {
    this.markers = [];
    this.collection.each(function (item) {
      var marker = new bb.Views.MessageView({model: item, map:this.map});
      this.markers.push(marker);
    }, this);
  }

});