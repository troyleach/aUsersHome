/*
 * Pledge controller
 */
(function() {
  'use strict';
  var controllerModule = angular.module('app.controller');

  controllerModule.controller('pledgeCtrl', ['$scope', "$location", 'getUserFactory', 'AuthenticationService', '$window', function($scope, $location, getUserFactory, AuthenticationService, $window) {
    $scope.policies = true;
// TODO refactor the location.href out use this stack => http://stackoverflow.com/questions/22390319/angular-js-testing-a-function-with-a-page-redirect-using-karma-jasmine
    $scope.openSurvey = function() {
      getUserFactory.getToken($scope.patientsUuid).then(function(response) {
        $scope.tokenInformation = response;
        $scope.usersToken = $scope.tokenInformation.token;
        $window.location.href = LONG_SURVEY_HOST + $scope.usersToken;
      })
      .catch(function() {
        $scope.error = 'There has been an error!';
      });
    };

  }]);
})();
