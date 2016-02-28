'use strict';

describe('Controller: PatientHub', function () {

  // load the controller's module
  beforeEach(module('app'));

  var patientHubCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    patientHubCtrl = $controller('patientHubCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('Verified Controller is defined', function() {
      // for the purpose of this test, confirm the controller is
      // not undefined/null
      expect(patientHubCtrl).toBeDefined();
      expect(patientHubCtrl).not.toBeNull();
  });

  it('Policy controller returns a string', function () {
    expect(patientHubCtrl.message).toBe('Hello, patientHub controller tested');
  });

});