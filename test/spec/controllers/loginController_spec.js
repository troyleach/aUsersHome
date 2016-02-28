'use strict';

describe('Controller: login', function () {

  // load the controller's module
  beforeEach(module('app'));

  var LoginCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LoginCtrl = $controller('LoginCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('Verified Controller is defined', function() {
      // for the purpose of this test, confirm the controller is
      // not undefined/null
      expect(LoginCtrl).toBeDefined();
      expect(LoginCtrl).not.toBeNull();
  });

  it('Introduction controller returns a string', function () {
    expect(LoginCtrl.message).toBe('Hello, login controller tested');
  });
});
