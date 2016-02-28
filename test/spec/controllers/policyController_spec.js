'use strict';

describe('Controller: Policy', function () {

  // load the controller's module
  beforeEach(module('app'));

  var policyCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    policyCtrl = $controller('policyCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('Verified Controller is defined', function() {
      // for the purpose of this test, confirm the controller is
      // not undefined/null
      expect(policyCtrl).toBeDefined();
      expect(policyCtrl).not.toBeNull();
  });

  it('Policy controller returns a string', function () {
    expect(policyCtrl.message).toBe('Hello, policy controller tested');
  });
});