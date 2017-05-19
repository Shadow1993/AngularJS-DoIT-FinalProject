(function() {
    'use strict';

    var app = angular.module('app');

    app.directive('jumbotron', function() {
        return {
            restrict: 'A',
            templateUrl: './templates/jumbotron.html'
        };
    });
}());
