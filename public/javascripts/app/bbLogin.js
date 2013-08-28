var bb = {
  Views: {},
  Models: {},
  Collections: {},
  init: function() {
    this.map = this.map();
    var messages = new this.Collections.Messages();
    this.messageView = new this.Views.MessagesView({collection: messages});
  }
};