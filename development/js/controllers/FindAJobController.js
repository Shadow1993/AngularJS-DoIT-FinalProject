(function() {
    'use strict';

    var app = angular.module('app');

    app.controller('FindAJobController', ['DataService', FindAJobController]);

    function FindAJobController(DataService) {
        var vm = this;
        vm.test = 'test';

        DataService.getJobs()
            .then(function(response) {
                vm.jobs = response;
            })
            .catch(function(response) {
                throw response;
            });
    }
}());
