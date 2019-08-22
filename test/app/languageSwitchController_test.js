'use strict';

describe('LanguageSwitchController', function () {

  beforeEach(angular.mock.module('dmtech'));

  var $rootScope;
  var $controller;
  var $injector;

  var scope;
  var controller;
  var $translate;

  beforeEach(angular.mock.inject(function (_$rootScope_,
    _$controller_, _$injector_) {
    $rootScope = _$rootScope_;
    $controller = _$controller_;
    $injector = _$injector_;
  }));

  beforeEach(function () {
    scope = $rootScope.$new();
    controller = $controller('LanguageSwitchController', {
      $scope: scope
    });
    $translate = $injector.get('$translate');
    spyOn($translate, 'use')
      .and.callThrough();
  });

  it('scope.changeLanguage(lang)', function () {
    scope.changeLanguage('ru');
    expect($translate.use)
      .toHaveBeenCalledWith('ru');
  });

  it('$translateChangeSuccess with given language in ' +
    'data should change $rootScope.lang',
    function () {
      $rootScope.$broadcast('$translateChangeSuccess', {
        language: 'ru'
      });
      expect($rootScope.lang)
        .toEqual('ru');
    });

  it('broadcast of $translateChangeSuccess with arabic changes direction' +
    ' to rtl',
    function () {
      $rootScope.$broadcast('$translateChangeSuccess', {
        language: 'ar'
      });
      /* jshint camelcase: false */
      expect($rootScope.default_direction)
        .toEqual('rtl');
    });

});