(function() {
    'use strict';

    var app = angular.module('app');

    app.controller('FooterController', ['$scope', FooterController]);

    function FooterController($scope) {
        $scope.test = 'test';
    }
}());
