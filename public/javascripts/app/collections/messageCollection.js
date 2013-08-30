bb.Collections.Messages = Backbone.Collection.extend({
  model: bb.Models.Message,
  initialize: function (options){
    var ne = '' + options.nelat + '_' + options.nelng;
    var sw = '' + options.swlat + '_' + options.swlng;
    this.url = '/messages/' + sw + '/' + ne;
  }
});