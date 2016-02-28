/*
 * policies controller
 */
(function() {
  'use strict';
  var controllerModule = angular.module('app.controller');

  controllerModule.controller('policyCtrl', ['$scope', function($scope, getUserFactory) {
    // write some cool code here....message below only for testing - remove
    this.message = 'Hello, policy controller tested';
  }]);
})();