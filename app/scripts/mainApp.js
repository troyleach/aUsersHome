(function() {
'use strict';
  var app = angular.module('app', [
    'ngRoute', // Route service
    'app.utilityService', 'app.constants', // MISC
    'app.directives', 'app.filters', // MISC
    'app.services', // Services
    'app.controller', // controller,
    'auth0',
    'angular-storage',
    'angular-jwt'
    ]);
// if the dependency file names change/added please update the karma.conf.js or tests will fail!

    app.config(['$routeProvider', function($routeProvider) {
        // Login
        $routeProvider.when('/login', {
            templateUrl: 'partials/login.html',
            controller: 'LoginCtrl'
        });

        // App pages
        $routeProvider.when('/introduction_page', {
            templateUrl: 'partials/introduction_page.html',
            controller: 'introductionCtrl',
            resolve: {
                loggedIn: function(AuthenticationService, $location) {
                    if(!AuthenticationService.isLoggedIn()) {
                        alert("Please sign in");
                        $location.path('/login');    //redirect user to login page.
                    }
                }
            }
        });

        $routeProvider.when('/pledge', {
            templateUrl: 'partials/pledge.html',
            controller: 'pledgeCtrl',
            resolve: {
                loggedIn: function(AuthenticationService, $location) {
                    if(!AuthenticationService.isLoggedIn()) {
                        alert("Please sign in");
                        $location.path('/login');    //redirect user to login page.
                    }
                }
            }
        });

        $routeProvider.when('/ciq_health_info_policy', {
            templateUrl: 'partials/ciq_health_info_policy.html',
            controller: 'policyCtrl',
            resolve: {
                loggedIn: function(AuthenticationService, $location) {
                    if(!AuthenticationService.isLoggedIn()) {
                        alert("Please sign in");
                        $location.path('/login');    //redirect user to login page.
                    }
                }
            }
        });

        $routeProvider.when('/ciq_privacy_policy', {
            templateUrl: 'partials/ciq_privacy_policy.html',
            controller: 'policyCtrl',
            resolve: {
                loggedIn: function(AuthenticationService, $location) {
                    if(!AuthenticationService.isLoggedIn()) {
                        alert("Please sign in");
                        $location.path('/login');    //redirect user to login page.
                    }
                }
            }
        });

        $routeProvider.when('/hub', {
            templateUrl: 'partials/hub.html',
            controller: 'patientHubCtrl',
            resolve: {
                loggedIn: function(AuthenticationService, $location) {
                    if(!AuthenticationService.isLoggedIn()) {
                        alert("Please sign in");
                        $location.path('/login');    //redirect user to login page.
                    }
                }
            } 
        });
        
        // Default
        $routeProvider.otherwise({
            redirectTo: '/login'
        });
    }]);

  })();
