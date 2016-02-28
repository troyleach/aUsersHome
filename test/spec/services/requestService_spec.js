'use strict';
(function() {

  describe('Factory(Service): Request Service', function () {
    // Load your module.
    var scope, deferred, $q, httpBackend;

    beforeEach(module('app'));

    beforeEach(function() {
      module(function($provide) {
        $provide.constant('APIURL.apiUrl', 'http://localhost:3000/api/v1/');
      });
    });
  
    // Initialize the controller and mock scope
    beforeEach(inject(function ($rootScope, _$q_, $httpBackend, getUserFactory) {
      $q = _$q_;
      scope = $rootScope.$new();
      deferred = _$q_.defer();
      httpBackend = $httpBackend;
      getUserFactory = getUserFactory;

    }));

    it('Expected to get an instance of getUserFactory', inject(function(getUserFactory) {
      expect(getUserFactory).toBeDefined();
    }));

    it('Expect users information from $http.get in getUser', inject(function(getUserFactory, APIURL) {
// ** id's and tokens are fake **
      var url = APIURL.apiUrl;
      var patientsUuid2 = "123456789-987654321-123456789";
      var patients_information = {
                                  "id": "123456789-987654321-123456789",
                                  "firstName": "first",
                                  "lastName": "last",
                                  "dateOfBirth": null,
                                  "institutionId": 1,
                                  "surveryStatus": "Incomplete",
                                  "mrn": null,
                                  "contact": {
                                    "email": "test@email.com"
                                  }
                                };

      httpBackend.expectGET(url + 'people/' + patientsUuid2).respond(patients_information);

      getUserFactory.getUser(patientsUuid2).then(function(response) {
        scope.usersInfo = response;
      });

      httpBackend.flush();
      expect(scope.usersInfo.lastName).toBe('last');
    }));

    it('Expect token from $http.get in getToken', inject(function(getUserFactory, APIURL) {
// ** id's and tokens are fake **
      var url = APIURL.apiUrl + 'patient/surveys/risk/token';
      var token_information = {
                                "id": 27,
                                "expiration_date": null,
                                "institution_id": 1,
                                "patient_email": null,
                                "referrer_email": null,
                                "institution_name": null,
                                "created_at": "2015-12-10T15:20:20.453-06:00",
                                "updated_at": "2015-12-10T15:20:20.453-06:00",
                                "person_legacy_id": null,
                                "person_id": "987654321-123456789-123456789",
                                "token": "12c345u67ur9"
                              }

      httpBackend.expectGET(url).respond(token_information);
// No need to pass in the uuid. the uuid is stored in the params, I am only testing the response.
      
      getUserFactory.getToken().then(function(response) {
        scope.usersToken = response;
      });

      httpBackend.flush();
      expect(scope.usersToken.token).toBe('12c345u67ur9');
    }));

  });

describe('Factory(Service): AuthenticationService', function () {
  var scope, $q, location, deferred;
  beforeEach(module('app'));

  beforeEach(inject(function ($rootScope, _$q_, $location, AuthenticationService) {
    $q = _$q_;
    scope = $rootScope.$new();
    deferred = _$q_.defer();
    location = $location;
    AuthenticationService = AuthenticationService;

  }));

  it('Expected to get an instance of AuthenticationService', inject(function(AuthenticationService) {
    expect(AuthenticationService).toBeDefined();
  }));

  it('Expect a isLoggedIn to return true', inject(function(AuthenticationService) {
    expect(isLoggedIn)toEqual(true);
  });




});

}());