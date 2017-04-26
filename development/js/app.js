'use strict';

var app = angular.module('app', ['ui.router']);

app.config(function($locationProvider, $stateProvider) {

    var states = {
        home: {
            name: 'home',
            url: '/',
            views: {
                '': {
                    templateUrl: './../templates/home.html'
                },
                'navigation@home': {
                    templateUrl: './../templates/navigation.html',
                    controller: 'NavController',
                    controllerAs: 'nav'
                }
            }
        }
    };

    $stateProvider
        .state(states.home);

    $locationProvider.html5Mode(true);
});
