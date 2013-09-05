bb.Views.CreateAccountView = Backbone.View.extend({
  template: bb.Templates.CreateAccountTemplate,

  initialize: function () {
    this.render();
  },

  render: function () {
    this.$el.append(this.template());
  },
})