'use strict';

/**
 * @ngdoc overview
 * @name delbApp
 * @description
 * # delbApp
 *
 * Main module of the application.
 */
angular
  .module('delbApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ng-token-auth',
    'angularModalService',
    'ui.bootstrap',
    'ui.bootstrap.collapse'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/signin', {
        templateUrl: 'views/user_sessions/new.html',
        controller: 'UserSessionsCtrl'
      })
      .when('/signup', {
        templateUrl: 'views/user_registrations/new.html',
        controller: 'UserRegistrationsCtrl'
      })
      .when('/groups', {
        templateUrl: 'views/groups.html',
        controller: 'GroupsCtrl',
        // authenticate user before page view
        // resolve: {
        //   auth: ['$auth', function($auth){
        //     return $auth.validateUser();
        //   }]
        // }
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/list', {
        templateUrl: 'views/list.html',
        controller: 'ListCtrl',
        // resolve: {
        //   auth: ['$auth', function($auth){
        //     return $auth.validateUser();
        //   }]
        // }
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
