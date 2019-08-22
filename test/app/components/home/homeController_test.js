'use strict';

describe('HomeController', function () {

    beforeEach(angular.mock.module('dmtech'));

    var $controller;
    var $rootScope;
    var $httpBackend;
    var $injector;

    var controller;
    var scope;

    function requests() {

        $httpBackend.when('GET', /.*/)
            .respond(200, [{}]); //get forums

    }

    beforeEach(angular.mock.inject(function (_$controller_,
        _$rootScope_, _$injector_) {

        $controller = _$controller_;
        $rootScope = _$rootScope_;
        $injector = _$injector_;

    }));

    beforeEach(function () {
        scope = $rootScope.$new();
        controller = $controller('HomeController', {
            $scope: scope
        });
        $httpBackend = $injector.get('$httpBackend');
    });

    beforeEach(requests);

    afterEach(function () {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });

    it('loads json', function () {
        expect(scope.team.length)
            .toEqual(0);
        $httpBackend.flush();
        expect(scope.team.length)
            .not.toEqual(0);
    });

});