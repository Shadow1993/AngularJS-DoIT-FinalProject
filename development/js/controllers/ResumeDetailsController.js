(function() {
    'use strict';

    var app = angular.module('app');

    app.controller('ResumeDetailsController', ['$scope', ResumeDetailsController]);

    function ResumeDetailsController($scope) {
        $scope.test = 'test';
    }
}());
