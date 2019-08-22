'use strict';

describe('HeaderController', function () {

  beforeEach(angular.mock.module('dmtech'));

  var $controller;
  var $rootScope;
  var $injector;

  var $location;
  var scope;
  var controller;

  beforeEach(angular.mock.inject(function (_$controller_,
    _$rootScope_, _$injector_) {

    $controller = _$controller_;
    $rootScope = _$rootScope_;
    $injector = _$injector_;

  }));

  beforeEach(function () {
    scope = $rootScope.$new();
    controller = $controller('HeaderController', {
      $scope: scope
    });
    $location = $injector.get('$location');

  });

  it('scope.checkPath(str)', function () {
    $location.path('/home');
    var c = scope.checkPath('/home');
    expect(c)
      .toBe(true);
  });

});