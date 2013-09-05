bb.Views.NavigationView = Backbone.View.extend({

  el: '#topbar',

  initialize: function () {
  },

  events:{
    'click .profile': 'editProfile',
    'click .mask': 'removeMask',
    'click .add': 'addMarker'
  },

  addMarker: function () {

  },

  editProfile: function () {
    $('.mask').css('display', 'block');
  },

  removeMask: function () {
    $('.mask').css('display', 'none');
  }

});