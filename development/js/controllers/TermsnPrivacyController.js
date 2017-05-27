(function() {
    'use strict';

    var app = angular.module('app');

    app.controller('TermsnPrivacyController', ['$scope', TermsnPrivacyController]);

    function TermsnPrivacyController($scope) {
        $scope.test = 'test';
    }
}());
