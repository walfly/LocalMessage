bb.Helpers.delegateMapEvents = function (obj, events, context){
  for(var key in events){
    var method = events[key];
    if (!_.isFunction(method)) {
      method = context[events[key]];
    }
    if (!method) {
      throw new Error('Method "' + events[key] + '" does not exist');
    }
    method = _.bind(method, context);
    google.maps.event.addListener(obj, key, method);
  }
};