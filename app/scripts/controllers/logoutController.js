// LogoutCtrl.js
(function() {
  angular.module('app').controller('logoutCtrl', ['$scope', '$http', 'auth', 'store', '$location',
    function ($scope, $http, auth, store, $location) {
      $scope.logout = function() {
        auth.signout();
        store.remove('token');
        store.remove('profile');
        $location.path('/login');
      };
    this.message = 'Hello, logout controller tested';
  }]);
})();