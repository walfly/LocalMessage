bb.Views.LoginView = Backbone.View.extend({

  el: '#login',

  template: bb.Templates.LoginFormTemplate,

  initialize: function () {
    this.render();
  },

  events:{
    'click .login': 'loginScreen',
    'click .mask': 'hideLogin'
  },

  loginScreen: function () {
    $('.mask').css('display', 'block');
    $('.loginForm').append(this.template({err:0}));
    $('.loginForm').css('display', 'block');
  },

  hideLogin: function () {
    $('.mask').css('display', 'none');
    $('.loginForm').css('display', 'none');
    $('.loginForm').empty();
  },

  render: function () {
    return this;
  }


});