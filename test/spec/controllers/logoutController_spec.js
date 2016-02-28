'use strict';

describe('Controller: login', function () {

  // load the controller's module
  beforeEach(module('app'));

  var logoutCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    logoutCtrl = $controller('logoutCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('Verified Controller is defined', function() {
      // for the purpose of this test, confirm the controller is
      // not undefined/null
      expect(logoutCtrl).toBeDefined();
      expect(logoutCtrl).not.toBeNull();
  });

  it('Introduction controller returns a string', function () {
    expect(logoutCtrl.message).toBe('Hello, logout controller tested');
  });
});
