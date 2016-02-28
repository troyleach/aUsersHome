// LoginCtrl.js
(function() {
  angular.module('app').controller('LoginCtrl', [
    '$scope', '$http', 'auth', 'store', '$location', 'getUserFactory',
    function ($scope, $http, auth, store, $location, getUserFactory) {
      $scope.login = function () {
        auth.signin({}, function (profile, token) {
          // Success callback
          store.set('profile', profile);
          store.set('token', token);

          getUserFactory.getUser(auth.profile.user_metadata.ciq_id).then(function(response) {
              if (response.survey_status === 'Complete') {
                $location.path('/hub');
              } else {
                $location.path('/introduction_page');
              }
            })
            .catch(function() {
              $scope.error = 'There has been an error!';
          });
            
          
        }, function () {
          // Error callback
        });
      };
      this.message = 'Hello, login controller tested';
  }]);
})();