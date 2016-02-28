// Karma configuration
// Generated on Wed Dec 09 2015 09:02:20 GMT-0600 (CST)

module.exports = function(config) {
    "use strict";
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      'app/bower_components/jquery/dist/jquery.js',
      'app/bower_components/angular/angular.js',
      'app/bower_components/angular-mocks/angular-mocks.js',
      'app/bower_components/angular-cookies/angular-cookies.js',
      'app/bower_components/angular-resource/angular-resource.js',
      'app/bower_components/angular-route/angular-route.js',
      
      'app/scripts/mainApp.js',
      'app/scripts/utility/util.js',
      'app/scripts/utility/constant.js',
      'app/scripts/filters/sampleFilter.js',
      'app/scripts/directives/sampleDirective.js',

      'app/scripts/services/requestService.js',
      'app/scripts/controllers/patientHubController.js',
      'app/scripts/controllers/introductionController.js',
      'app/scripts/controllers/pledgeController.js',
      'app/scripts/controllers/policyController.js',
      'app/scripts/controllers/loginController.js',
      'app/scripts/controllers/logoutController.js',

      'app/vendor/auth0-angular-4.js',
      'app/vendor/angular-storage/angular-storage.js',
      'app/vendor/angular-jwt/angular-jwt.js',

      'test/spec/**/*_spec.js'
    ],


    // list of files to exclude
    exclude: [
      '//cdn.auth0.com/js/lock-7.12.min.js',
      '//cdn.rawgit.com/auth0/angular-storage/master/dist/angular-storage.js',
      '//cdn.rawgit.com/auth0/angular-jwt/master/dist/angular-jwt.js',
      '//cdn.auth0.com/w2/auth0-angular-4.js'
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    // logLevel: config.LOG_INFO,
    logLevel: config. LOG_DEBUG,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome', 'Firefox', 'Safari'],
    // browsers: ['Firefox', 'Safari'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultanous
    concurrency: Infinity
  })
}
