(function() {
    'use strict';

    var app = angular.module('app');

    app.controller('JobDetailsController', ['$scope', JobDetailsController]);

    function JobDetailsController($scope) {
        $scope.test = 'test';
    }
}());
