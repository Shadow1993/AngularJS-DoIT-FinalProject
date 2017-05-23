'use strict';

var app = angular.module('app', ['ui.router', 'satellizer']);

app.config(function($locationProvider, $stateProvider, $urlRouterProvider, $authProvider) {

    /**
     * Helper auth functions
     */
    function skipIfLoggedIn($q, $auth) {
        var deferred = $q.defer();
        if ($auth.isAuthenticated()) {
            deferred.reject();
        } else {
            deferred.resolve();
        }
        return deferred.promise;
    }

    function loginRequired($q, $location, $auth) {
        var deferred = $q.defer();
        if ($auth.isAuthenticated()) {
            deferred.resolve();
        } else {
            $location.path('/login');
        }
        return deferred.promise;
    }

    var states = {
        home: {
            name: 'home',
            abstract: 'true',
            views: {
                '@': {
                    templateUrl: './../templates/home.html'
                },
                'header@home': {
                    templateUrl: './../templates/header.html',
                    controller: 'HeaderController',
                    controllerAs: 'header'
                },
                'main@home': {
                    templateUrl: './../templates/main.html'
                }
            }
        },
        main: {
            name: 'main',
            abstract: true,
            parent: 'home',
            templateUrl: './../templates/main.html'
        },
        test: {
            name: 'main.test',
            url: '/',
            templateUrl: './../templates/test.html'
        },
        login: {
            name: 'main.login',
            url: '/login',
            templateUrl: './../templates/login.html',
            controller: 'LoginController',
            controllerAs: 'login',
            resolve: {
                skipIfLoggedIn: skipIfLoggedIn
            }
        },
        register: {
            name: 'main.register',
            url: '/register',
            templateUrl: './../templates/register.html',
            resolve: {
                skipIfLoggedIn: skipIfLoggedIn
            }
        },
        profile: {
            name: 'main.profile',
            url: '/profile',
            templateUrl: './../templates/profile.html',
            controller: 'ProfileController',
            resolve: {
                loginRequired: loginRequired
            }
        },
        logout: {
            name: 'main.logout',
            url: '/logout',
            template: null,
            controller: 'LogoutController'
        }
    };

    $stateProvider
        .state(states.home)
        .state(states.main)
        .state(states.test)
        .state(states.login)
        .state(states.logout)
        .state(states.register)
        .state(states.profile);

    // $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/');

    $authProvider.google({
        clientId: '195416828444-nqkuuv98i94ai28nvfu480q5q4fr3cor.apps.googleusercontent.com'
    });
});
