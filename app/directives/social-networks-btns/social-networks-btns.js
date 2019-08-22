'use strict';

angular.module('dmtech')
    .directive('socialNetworksBtns', function () {
        return {
            restrict: 'E',
            templateUrl: 'app/directives/social-networks-btns/' +
                'social-networks-btns.html'
        };
    });