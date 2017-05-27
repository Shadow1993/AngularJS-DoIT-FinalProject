(function() {
    'use strict';

    var app = angular.module('app');

    app.controller('ArticlesnBlogController', ['$scope', ArticlesnBlogController]);

    function ArticlesnBlogController($scope) {
        $scope.test = 'test';
    }
}());
