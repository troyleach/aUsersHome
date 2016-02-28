describe('Controller: Pledge', function () {

  var pledgeCtrl,
      scope;
  
  // load the controller's module
  beforeEach(module('app'));

  // Initialize the controller and mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    
    pledgeCtrl = $controller('pledgeCtrl', {
      $scope: scope,
      // place mocked dependencies here
    });
  }));

  it('Verified Controller is defined', function() {
      // for the purpose of this test, confirm the controller is
      // not undefined/null
      expect(pledgeCtrl).toBeDefined();
      expect(pledgeCtrl).not.toBeNull();
  });

  it('Expects to return a uuid', function() {
    expect(scope.policies).toBe(true);
  });
  
});

describe('Open survey request', function () {
  var pledgeCtrl,
      scope,
      $q,
      deferred,
      windowObject = { location: {href: ''} };
  
  // load the controller's module
  beforeEach(module('app'));

  // Initialize the controller and mock scope
  beforeEach(inject(function ($controller, $rootScope, _$q_, getUserFactory) {
    $q = _$q_;
    scope = $rootScope.$new();
    deferred = _$q_.defer();
    spyOn(getUserFactory, 'getUser').and.returnValue(deferred.promise);
    spyOn(getUserFactory, 'getToken').and.returnValue(deferred.promise);
    
    pledgeCtrl = $controller('pledgeCtrl', {
      $scope: scope,
      getUserFactory: getUserFactory,
      $window: windowObject
      // place mocked dependencies here
    });
  }));

// testing getting patients info
  it('Verify function $scope.openSurvey is defined', function() {
      expect(scope.openSurvey).toBeDefined();
      expect(scope.openSurvey).not.toBeNull();
  });

// test getting Token
  it('Expect to resolve promise', function() {
    LONG_SURVEY_HOST = 'some/url/';
    scope.openSurvey();
    deferred.resolve( { "token": "c5271cc5d36c" } );
    scope.$apply();
    expect(scope.usersToken).not.toBe(undefined);
    expect(scope.error).toBe(undefined);
    expect(windowObject.location.href).toEqual('some/url/c5271cc5d36c');
  });

  it('should reject promise', function() {
    scope.openSurvey();
    deferred.reject();
    scope.$apply();
    expect(scope.usersToken).toBe(undefined);
    expect(scope.error).toBe('There has been an error!');
  });

});