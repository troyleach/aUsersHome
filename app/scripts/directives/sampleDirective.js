/*
 * Directives
 */
(function() {
    'use strict';
    var directiveModule = angular.module('app.directives', []);

    directiveModule.directive('sampleDirective', ['$scope', function($scope) {
        return {
            restrict: 'E',
            transclude: true,
            scope: {
            },
            controller: function($scope) {

            },
            link: function(scope, elm, attrs) {
                //console.log("called link");
            },
            replace: true,
            templateUrl: ""
        };
    }]);
})();