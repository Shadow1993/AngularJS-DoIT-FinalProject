(function() {
    'use strict';

    var app = angular.module('app');

    app.controller('FindAJobController', ['$scope', FindAJobController]);

    function FindAJobController($scope) {
        $scope.test = 'test';
    }
}());
