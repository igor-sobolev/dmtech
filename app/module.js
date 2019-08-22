'use strict';

var app = angular.module('dmtech', ['ngRoute', 'pascalprecht.translate',
  'ngCookies', 'angular-google-analytics']);

/* jshint camelcase: false*/
app.run(['$rootScope', function ($rootScope) {

  $rootScope.lang = 'ru';

  $rootScope.default_float = 'left';
  $rootScope.opposite_float = 'right';

  $rootScope.default_direction = 'ltr';
  $rootScope.opposite_direction = 'rtl';

}]);

app.config(['$translateProvider', function ($translateProvider) {

  $translateProvider
    .useStaticFilesLoader({
      prefix: '/translations/',
      suffix: '.json'
    })
    .preferredLanguage('ru')
    .useLocalStorage()
    .useMissingTranslationHandlerLog()
    .useSanitizeValueStrategy(null);

}]);

// configuring google analytics
app.config(['AnalyticsProvider', function (AnalyticsProvider) {

  AnalyticsProvider.setAccount('UA-88907316-1');

  // Track all routes (default is true).
  AnalyticsProvider.trackPages(true);

  // Track all URL query params (default is false).
  AnalyticsProvider.trackUrlParams(true);

  // Ignore first page view (default is false).
  // Helpful when using hashes and whenever your bounce rate
  // looks obscenely low.
  AnalyticsProvider.ignoreFirstPageLoad(true);

  // RegEx to scrub location before sending to analytics.
  // Internally replaces all matching segments with an empty string.
  AnalyticsProvider.setRemoveRegExp(/\/\d+?$/);

  // Activate reading custom tracking urls from $routeProvider config 
  // (default is false)
  // This is more flexible than using RegExp and easier to maintain for 
  // multiple parameters.
  // It also reduces tracked pages to routes (only those with a templateUrl) 
  // defined in the
  // $routeProvider and therefore reduces bounce rate created by redirects.
  // NOTE: The following option requires the ngRoute module
  AnalyticsProvider.readFromRoute(true);

  AnalyticsProvider.setDomainName('dmtech.by');

  AnalyticsProvider.logAllCalls(true);

}]);

// Need be injected to work
app.run(['Analytics', function (Analytics) {

  Analytics.configuration.debugMode = false;

}]);

app.controller('LanguageSwitchController', ['$scope', '$rootScope',
  '$translate',
  function ($scope, $rootScope, $translate) {

    $scope.changeLanguage = function (langKey) {
      $translate.use(langKey);
    };

    $rootScope.$on('$translateChangeSuccess', function (event, data) {

      var language = data.language;

      $rootScope.lang = language;

      $rootScope.default_direction = language === 'ar' ? 'rtl' : 'ltr';
      $rootScope.opposite_direction = language === 'ar' ? 'ltr' : 'rtl';

      $rootScope.default_float = language === 'ar' ? 'right' : 'left';
      $rootScope.opposite_float = language === 'ar' ? 'left' : 'right';

    });
  }

]);