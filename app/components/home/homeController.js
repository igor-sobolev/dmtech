/* globals angular */
'use strict';

angular.module('dmtech')
    .controller('HomeController', ['$scope', '$http', function ($scope, $http) {

        $scope.team = [];

        getTeam();

        /**
         * Gets team list from json
         */
        function getTeam() {
            $http.get('/assets/json/people.json')
                .success(function (data) {
                    $scope.team = data;
                });
        }

}]);