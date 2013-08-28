bb.Collections.Messages = Backbone.Collection.extend({
  model: bb.Models.Message,
  url: '/messages'
});