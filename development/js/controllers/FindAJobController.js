(function() {
    'use strict';

    var app = angular.module('app');

    app.controller('FindAJobController', ['DataService', '$auth', '$state', FindAJobController]);

    function FindAJobController(DataService, $auth, $state) {
        var vm = this;
        vm.test = 'test';

        if (!$auth.isAuthenticated()) {
            $state.go('main.login');
        }

        DataService.getJobs()
            .then(function(response) {
                vm.jobs = response;
            })
            .catch(function(response) {
                throw response;
            });
    }
}());
