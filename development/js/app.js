'use strict';

var app = angular.module('app', ['ui.router']);

app.config(function($locationProvider, $stateProvider, $urlRouterProvider) {

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
            url: '/test',
            templateUrl: './../templates/test.html'
        }
    };

    $stateProvider
        .state(states.home)
        .state(states.main)
        .state(states.test);

    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/');
});
