(function () {
  'use strict';

  angular.module('MenuApp')
    .controller('CategoriesController',CategoriesController_fn);

  CategoriesController_fn.$inject = ['responseData'];
  function CategoriesController_fn(responseData) {
    var $ctrl = this;
    $ctrl.list = [];
    if(responseData.length != 0)
      $ctrl.list = responseData;
  };

})()
