/*
 * introduction controller
 */
(function() {
  'use strict';
  var controllerModule = angular.module('app.controller');

  controllerModule.controller('introductionCtrl', ['$scope', function($scope) {
  
    // write some cool code here....message below only for testing remove
    this.message = 'Hello, introduction controller tested';
  }]);
})();