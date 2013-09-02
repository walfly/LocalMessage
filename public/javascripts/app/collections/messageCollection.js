bb.Collections.Messages = Backbone.Collection.extend({

  model: bb.Models.Message,

  initialize: function (options){
    var ne = '' + options.nelat + '_' + options.nelng;
    var sw = '' + options.swlat + '_' + options.swlng;
    this.url = '/messages/' + sw + '/' + ne;
  },

  updateBounds: function (boundsArray){
    var ne = '' + boundsArray[0] + '_' + boundsArray[1];
    var sw = '' + boundsArray[2] + '_' + boundsArray[3];
    this.url = '/messages/' + sw + '/' + ne;
    this.fetch();
  }
});