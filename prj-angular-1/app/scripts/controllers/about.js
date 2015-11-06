'use strict';

/**
 * @ngdoc function
 * @name ang7App.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the ang7App
 */
angular.module('ang7App')
  .controller('AboutCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  })
  .controller('AlertDemoCtrl', function ($scope) {
    console.log("AlertDemoCtrl");
    $scope.alerts = [
      {type: 'danger', msg: 'Oh snap! Change a few things up and try submitting again.'},
      {type: 'success', msg: 'Well done! You successfully read this important alert message.'}
    ];

    $scope.addAlert = function () {
      $scope.alerts.push({msg: 'Another alert!'});
    };

    $scope.closeAlert = function (index) {
      $scope.alerts.splice(index, 1);
    };
  });
