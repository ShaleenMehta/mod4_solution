(function () {
  'use strict';

  angular.module('MenuApp')
    .component('categoryItem',{
      templateUrl: 'myHTML/category-items.template.html',
      bindings: {
        list: '<',
        shortName: '<',
        categoryName: '<'
      }
    });

})()
