/* globals angular */
'use strict';

angular.module('dmtech')
    .controller('HeaderController', ['$scope', '$location', function ($scope,
        $location) {

        /**
         * Checking current path to equal given string
         * @param  {String} str Given path
         * @return {Boolean}     True if equal
         */
        $scope.checkPath = function (str) {
            return $location.path() == str;
        };

}]);

angular.module('dmtech')
    .directive('headerPartial', function () {
        return {
            restrict: 'E',
            controller: 'HeaderController',
            scope: {},
            templateUrl: 'app/shared/header/header.html'
        };
    });