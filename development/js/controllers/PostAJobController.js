(function() {
    'use strict';

    var app = angular.module('app');

    app.controller('PostAJobController', ['$scope', PostAJobController]);

    function PostAJobController($scope) {
        $scope.test = 'test';
    }
}());
