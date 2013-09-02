bb.Views.MessagesView = Backbone.View.extend({

  initialize: function (options) {
    this.map = options.map;
    this.getModels();
  },

  getModels: function () {
    var self = this;
    this.collection.fetch({
      success: function (){
        self.render();
        self.collection.on('add remove', self.update, self);
      }
    });
  },

  update: function () {
    this.collection.each(function (item){
      var id = item.get('id');
      if(this.markers[id]){
        var mark = this.markers[id].marker;
        this.markers[id].removeView();
        var marker = new bb.Views.MessageView({
          model: item,
          map: this.map,
          marker: mark
        });
      } else {
        var marker = new bb.Views.MessageView({model: item, map: this.map});
      }
      this.markers[id] = marker;
    }, this);
  },

  render: function () {
    this.markers = {};
    this.collection.each(function (item) {
      var marker = new bb.Views.MessageView({model: item, map: this.map});
      this.markers[item.get('id')] = marker;
    }, this);
  }

});