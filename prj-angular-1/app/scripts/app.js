'use strict';


function price(days){
  return days * 1000;
}

////////////////////////////////////////


/**
 * @ngdoc overview
 * @name ang7App
 * @description
 * # ang7App
 *
 * Main module of the application.
 */
angular
  .module('ang7App', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap',
    'restangular'
  ])
  .config(function ($routeProvider) {
    console.log("config");
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/requests', {
        templateUrl: 'views/requests.html',
        controller: 'RequestsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .controller('FieldCtrl', function ($scope, $rootScope) {



    $scope.field = $rootScope.field * 2;

  })


  .controller('CheckCtrl', function ($scope) {
    //$scope.form.fio = "F I O";
    //$scope.form.price = 12333;
    //$scope.form.show = false;
  })

  .controller('RequestsCtrl', function ($rootScope, Restangular) {



    if(!$rootScope.requests) {
      $rootScope.requests = null;

      Restangular.allUrl('requests', 'http://localhost:3000/request').getList().then(function (requests) {
        $rootScope.requests = requests;

      });
    }

  })
  .controller('HeaderController', function ($scope, $location) {

    $scope.isActive = function (viewLocation) {
      return viewLocation === $location.path();
    };

  })
  .controller('FormCtrl', function ($scope, $rootScope, Restangular) {

    function validate($scope) {
      $scope.dirty = true;
      if(isNaN($scope.days)){
        $scope.error1 = "Не цифра";
        return false;
      }else{
        $scope.error1 = null;
      }

      if($scope.fio.length < 3){
        $scope.error2 = "Слишком короткое ФИО";
        return false;
      }else{
        $scope.error2 = null;
      }
      return true;
    }

    $scope.submit = function () {
      //if(!validate($scope)){
      //  return ;
      //}

      $rootScope.form.fio = $scope.fio;
      $rootScope.form.price = price($scope.days);

      var request = $rootScope.form;
      Restangular.allUrl('requests', 'http://localhost:3000/request').post(request/*, {query: 123123}, {header:123123}*/).then(function (res) {

        $rootScope.form.show = true;

      }, function (response) {
        console.log(response);
        alert("Увы заявка не добавлена");
      })



    };


  })

  .run(function ($rootScope, $location) {

    $rootScope.form = {
      show: false
    };

    $rootScope.$on('$routeChangeSuccess', function (next, current) {
      console.log($location)

    });



    $rootScope.field = 12;
    console.log("run");

  });
