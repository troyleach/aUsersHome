/*
 * Constants
 */
(function() {
  'use strict';
  var constantsModule = angular.module('app.constants', []);

  constantsModule.constant('APIURL', {
      apiUrl: 'http://localhost:3000/api/v1/',
      longSurveyHost: 'http://questionnaire-beta.cancer-iq.com/#/'
  });
})();

// TODO.. need to change gulp so it will change the constants.
// http://geekindulgence.com/environment-variables-in-angularjs-and-ionic/
// check this out for more info on constants
// http://stackoverflow.com/questions/18494050/is-there-a-way-in-angularjs-to-define-constants-with-other-constants
// Tests