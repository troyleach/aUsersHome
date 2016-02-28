/*
 * Dashboard controller
 */
(function() {
  'use strict';
  var controllerModule = angular.module('app.controller', []);
  
  controllerModule.controller('patientHubCtrl', ['$scope', 'getUserFactory', function($scope, getUserFactory) {
    // write some cool code here....message below only for testing - remove
    this.message = 'Hello, patientHub controller tested';
  }]);
})();