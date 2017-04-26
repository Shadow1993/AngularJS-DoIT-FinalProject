'use strict';

var app = angular.module('app', ['ui.router']);

app.config(function($locationProvider, $stateProvider) {
    $locationProvider.html5Mode(true);

    var states = {
        home: {
            name: 'home',
            url: '/',
            views: {
                '': { templateUrl: './../templates/home.html' },
                'navigation@home': { templateUrl: './../templates/navigation.html' }
            }
        }
    };

    $stateProvider
        .state(states.home);
});
