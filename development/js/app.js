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
                'navigation@home': {
                    templateUrl: './../templates/navigation.html',
                    controller: 'NavController',
                    controllerAs: 'nav'
                },
                'testMain@home': {
                    templateUrl: './../templates/testMain.html'
                }
            }
        },
        testMain: {
            name: 'testMain',
            abstract: true,
            parent: 'home',
            templateUrl: './../templates/testMain.html'
        },
        test: {
            name: 'testMain.test',
            url: '/test',
            templateUrl: './../templates/test.html'
        },
        test2: {
            name: 'testMain.test2',
            url: '/test2',
            templateUrl: './../templates/test2.html'
        }
    };

    $stateProvider
        .state(states.home)
        .state(states.testMain)
        .state(states.test)
        .state(states.test2);

    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/test');
});
