/* globals angular */
'use strict';

angular.module('dmtech')
  .controller('TechnologiesController', ['$scope', '$http', function ($scope,
    $http) {

    $scope.technologies = [];

    getTechnologies();

    /**
     * Returns first half of technologies
     * @return {Object} Array of technologies
     */
    $scope.firstHalf = function () {
      var c = Math.ceil($scope.technologies.length / 2);
      return $scope.technologies.slice(0, c);
    };

    /**
     * Returns second half of technologies
     * @return {Object} Array of technologies
     */
    $scope.secondHalf = function () {
      var c = Math.ceil($scope.technologies.length / 2);
      return $scope.technologies.slice(c, $scope.technologies.length);
    };

    /**
     * Gets technologies list from json
     */
    function getTechnologies() {
      $http.get('/assets/json/technologies.json')
        .success(function (data) {
          $scope.technologies = data;
        });
    }

}]);