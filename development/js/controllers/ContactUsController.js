(function() {
    'use strict';

    var app = angular.module('app');

    app.controller('ContactUsController', ['$scope', ContactUsController]);

    function ContactUsController($scope) {
        $scope.test = 'test';
    }
}());
