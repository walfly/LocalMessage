bb.Views.LoginView = Backbone.View.extend({

  el: '#topbar',

  template: bb.Templates.LoginFormTemplate,

  initialize: function () {
    this.render();
  },

  events:{
    'click .login': 'loginScreen',
    'click .mask': 'hideLogin',
    'click .submit': 'tryPassword'
  },

  tryPassword: function () {
    // probably a better way
    var self = this;
    var formData = $('form').serializeArray();
    $('#username').val('');
    $('#password').val('');
    var data = {};
    data[formData[0].name] = formData[0].value;
    data[formData[1].name] = formData[1].value;
    var submit = $.ajax({
      url: '/login',
      type: 'POST',
      dataType: 'json',
      data: data
    });
    submit.done( function (data) {
      if(data.err){
        $('.loginForm').empty();
        $('.loginForm').append(self.template(data));
      } else {
        var latlng = '' + bb.lat + '_' + bb.lng;
        location.href = '/member/'+latlng+'/' + data.id;
      }
    });
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