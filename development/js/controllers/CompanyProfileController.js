(function() {
    'use strict';

    var app = angular.module('app');

    app.controller('CompanyProfileController', ['$scope', CompanyProfileController]);

    function CompanyProfileController($scope) {
        $scope.test = 'test';
    }
}());
