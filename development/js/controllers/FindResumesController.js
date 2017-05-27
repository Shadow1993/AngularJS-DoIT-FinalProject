(function() {
    'use strict';

    var app = angular.module('app');

    app.controller('FindResumesController', ['$scope', FindResumesController]);

    function FindResumesController($scope) {
        $scope.test = 'test';
    }
}());
