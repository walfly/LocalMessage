bb.Views.LoginView = Backbone.View.extend({

  el: '#topbar',

  template: bb.Templates.LoginFormTemplate,

  initialize: function () {
  },

  events:{
    'click .login': 'loginScreen',
    'click .createAccount': 'createAccountScreen',
    'click .mask': 'hideModal',
    'click .submit': 'tryPassword',
    'keyup #password': 'isEnter'
  },

  isEnter: function (e) {
    if (e.keyCode === 13){
      this.tryPassword();
    }
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
        $('.modal').empty();
        $('.modal').append(self.template(data));
      } else {
        var latlng = '' + bb.lat + '_' + bb.lng;
        location.href = '/member/'+latlng+'/' + data.id;
      }
    });
  },

  loginScreen: function () {
    $('.mask').css('display', 'block');
    $('.modal').append(this.template({err:0}));
    $('.modal').css('display', 'block');
  },

  createAccountScreen: function () {
    var newUser = new bb.Models.UserModel();
    this.createAccount =
  }

  hideModal: function () {
    $('.mask').css('display', 'none');
    $('.modal').css('display', 'none');
    $('.modal').empty();
  }

});