'use strict';

describe('HeaderDirective', function () {

  beforeEach(angular.mock.module('dmtech'));

  var $rootScope;
  var $compile;
  var $httpBackend;

  beforeEach(angular.mock.inject(function (_$rootScope_, _$compile_,
    _$httpBackend_) {

    $rootScope = _$rootScope_;
    $compile = _$compile_;
    $httpBackend = _$httpBackend_;

  }));

  beforeEach(function () {
    $httpBackend.whenGET(/.*/)
      .respond(200, []);
  });

  it('HeaderDirective', function () {
    var element = $compile('<header-partial></header-partial>')(
      $rootScope);

    $rootScope.$digest();

    expect(element.html())
      .toContain('<header>');

    expect(element.html())
      .toContain('<nav>');
  });

});