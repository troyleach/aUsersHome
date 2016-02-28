/*
 * Filters
 */
(function() {
  'use strict';
  var filtersModule = angular.module('app.filters', []);

  filtersModule.filter('simpleFilter', function() {
      return function(input) {
          try {
              //console.log('utcToDate :::::: input: ' + input);
          } catch (error) {
              console.log('utcToDate :::::: ERROR: ' + error);
          }
          return input;
      };
  });
})();