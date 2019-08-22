'use strict';

describe('TechnologiesController', function () {

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
        controller = $controller('TechnologiesController', {
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
        expect(scope.technologies.length)
            .toEqual(0);
        $httpBackend.flush();
        expect(scope.technologies.length)
            .not.toEqual(0);
    });

    it('scope.firstHalf', function () {
        $httpBackend.flush();
        scope.technologies = [1, 2, 3, 4, 5];
        var arr = scope.firstHalf();
        expect(arr)
            .toContain(1);
        expect(arr)
            .toContain(2);
        expect(arr)
            .toContain(3);
        expect(arr.length)
            .toBe(3);
    });

    it('scope.secondHalf', function () {
        $httpBackend.flush();
        scope.technologies = [1, 2, 3, 4, 5];
        var arr = scope.secondHalf();
        expect(arr)
            .toContain(4);
        expect(arr)
            .toContain(5);
        expect(arr)
            .not.toContain(3);
        expect(arr.length)
            .toBe(2);
    });

});