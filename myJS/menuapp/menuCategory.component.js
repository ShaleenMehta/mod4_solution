(function () {
  'use strict';

  angular.module('MenuApp')
    .component('menuCategory',{
      templateUrl: 'myHTML/menu-categories.template.html',
      bindings: {
        list: '<'
      }
    });

})()
