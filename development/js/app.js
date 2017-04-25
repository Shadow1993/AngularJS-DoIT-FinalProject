'use strict';

var app = angular.module('app', ['ui.router']);

app.config(function($locationProvider, $stateProvider) {
    $locationProvider.html5Mode(true);

    var states = {
        home: {
            abstract: true,
            name: 'home',
            url: '/',
            templateUrl: './../templates/home.html'
        },
        navigation: {
            name: 'home.navigation',
            url: '',
            templateUrl: './../templates/navigation.html'
        }
    };

    $stateProvider
        .state(states.home)
        .state(states.navigation);

});
