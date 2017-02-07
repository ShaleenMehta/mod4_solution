(function () {
  'use strict';

  angular.module('data')
    .service('MenuDataService',MenuDataService_fn)
    .constant('baseUrl','https://davids-restaurant.herokuapp.com/')
    ;

  MenuDataService_fn.$inject = ['baseUrl', '$http','$q','$timeout'];
  function MenuDataService_fn(baseUrl, $http, $q, $timeout) {
    var svc = this;
    svc.getAllCategories = function () {
      return $http({url: (baseUrl + 'categories.json')})
      .then(function (response){return response.data;});
    };
    svc.getItemsForCategory = function (categoryShortName) {
      var output = function(error) {
        return categoryShortName;
      } ;
      if(categoryShortName != '')
      {
        output = $http({
          url: (baseUrl + 'menu_items.json'),
          params: {category: categoryShortName}
        })
        .then(function (response){
          var output = response.data;
          if(output.menu_items.length == 0)
          {
            output = {
              menu_items: output.menu_items,
              short_name: categoryShortName
            };
          }
          return output;
        });
      };
      return output;
    };
  };
})()
