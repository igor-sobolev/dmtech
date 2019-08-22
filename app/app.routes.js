'use strict';

angular.module('dmtech')
  .config(['$routeProvider', '$locationProvider', function ($routeProvider,
      $locationProvider) {

      $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
      });

      $routeProvider
        .when('/home', {
          templateUrl: 'app/components/home/homeView.html',
          controller: 'HomeController'
        })
        .when('/contacts', {
          templateUrl: 'app/components/contacts/contactsView.html'
        })
        .when('/technologies', {
          templateUrl: 'app/components/technologies/technologiesView.html',
          controller: 'TechnologiesController'
        })
        .when('/career/students', {
          templateUrl: 'app/components/career/students/studentsView.html'
        })
        .when('/career/specialists', {
          templateUrl: 'app/components/career/specialists/specialistsView.html'
        })
        .otherwise({
          redirectTo: '/home'
        });

  }

]);