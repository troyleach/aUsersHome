(function() {
  'use strict';

  angular
    .module('app')
    .config(config)
    .run(function(auth) {
      // This hooks al auth events to check everything as soon as the app starts
      auth.hookEvents();
    });

  /** @ngInject */
  function config($logProvider, authProvider,
                  $httpProvider, jwtInterceptorProvider) {
    // Enable log
    $logProvider.debugEnabled(true);

    authProvider.init({
      domain: 'DOMAIN.com',
      clientID: 'CLIENT_ID_HERE'
    });

    // We're annotating this function so that the `store` is injected correctly when this file is minified
    jwtInterceptorProvider.tokenGetter = ['store', function(store) {
      // Return the saved token
      return store.get('token');
    }];

    $httpProvider.interceptors.push('jwtInterceptor');
  }

})();
