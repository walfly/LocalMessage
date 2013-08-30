bb.Collections.Messages = Backbone.Collection.extend({
  model: bb.Models.Message,
  initialize: function (options){
    var ne = '' + options.nelat + options.nelng;
    var sw = '' + options.swlat + options.swlng;
    this.url = '/messages/' + sw + '/' + ne;
  }
});