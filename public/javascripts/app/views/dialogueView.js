bb.Views.DialogueView = Backbone.View.extend({
  el: '#dialogue',

  template: bb.Templates.DialogueTemplate,

  initialize: function (){
    this.render();
  },

  events: {
    'click' : 'usernameSearch'
  },

  usernameSearch: function (e){
    console.log($(e.target).html());
  },

  render: function (){
    this.$el.empty()
    var message = this.model.toJSON();
    this.$el.append(this.template(message));
  }
});