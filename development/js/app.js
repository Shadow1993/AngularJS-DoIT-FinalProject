'use strict';

var app = angular.module('app', ['ui.router']);

app.config(function($locationProvider, $stateProvider) {
    $locationProvider.html5Mode(true);

    var homeState = {
        name: 'home',
        url: '/',
        templateUrl: './../templates/home.html'
    };

    $stateProvider.state(homeState);
});
