(function () {
  'use strict';

  angular.module('MenuApp')
    .config(RoutesConfig);

  RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
  function RoutesConfig($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
      .state ('home', {
        url: '/',
        templateUrl: 'myHTML/home.template.html'
      })
      .state ('categories', {
        url: '/categories',
        templateUrl: 'myHTML/menu-categories.html',
        controller: 'CategoriesController as $ctrl',
        resolve:{
          responseData: ['MenuDataService', function(MenuDataService) {
            return MenuDataService.getAllCategories()
              .then(function (response){return response;});
          }]
        }
      })
      .state ('categories.items', {
        url: '/{short_name}',
        templateUrl: 'myHTML/category-items.html',
        controller: 'ItemsController as $ctrl',
        resolve:{
          responseData: ['$stateParams', 'MenuDataService', function($stateParams, MenuDataService) {
            return MenuDataService.getItemsForCategory($stateParams.short_name)
              .then(function (response){return response;});
          }]
        }
      })
    ;
  };

})()
