'use strict';

describe('FooterDirective', function () {

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
    var element = $compile('<footer-partial></footer-partial>')(
      $rootScope);

    $rootScope.$digest();

    expect(element.html())
      .toContain('<footer>');

  });

});