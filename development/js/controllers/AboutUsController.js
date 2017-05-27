(function() {
    'use strict';

    var app = angular.module('app');

    app.controller('AboutUsController', ['$scope', AboutUsController]);

    function AboutUsController($scope) {
        $scope.test = 'test';
    }
}());
