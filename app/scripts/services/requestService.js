/*
 * Services
 */
(function() {
  'use strict';
  var serviceModule = angular.module('app.services', []);

  serviceModule.factory('getUserFactory', ['$http', '$q', 'APIURL', function(http, $q, APIURL) {
    return {
      getUser: function(uuid) {
        var deferred = $q.defer();
        var url = APIURL.apiUrl + 'people/' + uuid;

        http.get(url).success(function(response){
          deferred.resolve(response);
        })
        .error(function() {
          deferred.reject();
        });
        return deferred.promise;
      },
      
      getToken: function(uuid) {
        var deferred = $q.defer();
        var url = APIURL.apiUrl + 'patient/surveys/r/token';
        http.get( url, { params: { "id": uuid }} ).success(function(response) {
          deferred.resolve(response);
        })
        .error(function() {
          deferred.reject();
        });
        return deferred.promise;
      }
    };

  }]);

  serviceModule.factory('AuthenticationService', ['$q', '$location', '$rootScope', function($q, $location, $rootScope) {
    return {
      isLoggedIn: function() {
        var token = localStorage.token;
        if (!token) {
          return false;
        } else {
          return true;
        }
      }
    };

  }]);

}).call(this);
