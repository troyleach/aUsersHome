'use strict';

describe('Controller: introduction', function () {

  // load the controller's module
  beforeEach(module('app'));

  var introductionCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    introductionCtrl = $controller('introductionCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('Verified Controller is defined', function() {
      // for the purpose of this test, confirm the controller is
      // not undefined/null
      expect(introductionCtrl).toBeDefined();
      expect(introductionCtrl).not.toBeNull();
  });

  it('Introduction controller returns a string', function () {
    expect(introductionCtrl.message).toBe('Hello, introduction controller tested');
  });
});
