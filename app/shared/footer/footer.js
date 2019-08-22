/* globals angular */
'use strict';

angular.module('dmtech')
  .directive('footerPartial', function () {
    return {
      restrict: 'E',
      scope: {},
      templateUrl: 'app/shared/footer/footer.html',
      controller: 'FooterController'
    };
  })
  .controller('FooterController', ['$scope', function ($scope) {

    /**
     * Current year number
     * @return {Number} Current year
     */
    $scope.currentYear = function () {
      var val = new Date()
        .getFullYear();
      return val;
    };

  }]);