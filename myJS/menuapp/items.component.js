(function () {
  'use strict';

  angular.module('MenuApp')
    .controller('ItemsController',ItemsController_fn);

  ItemsController_fn.$inject = ['responseData'];
  function ItemsController_fn(responseData) {
    var $ctrl = this;
    $ctrl.list = [];
    if(responseData.menu_items.length != 0)
    {
      $ctrl.categoryName = responseData.category.name;
      $ctrl.list = responseData.menu_items;
    }
    else
      $ctrl.short_name = responseData.short_name;
  };

})()
