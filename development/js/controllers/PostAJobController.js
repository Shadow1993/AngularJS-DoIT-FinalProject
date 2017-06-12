(function() {
    'use strict';

    var app = angular.module('app');

    app.controller('PostAJobController', [PostAJobController]);

    function PostAJobController() {
        var vm = this;
        vm.test = 'test';
    }
}());
