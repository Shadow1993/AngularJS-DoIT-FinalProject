(function() {
    'use strict';

    var app = angular.module('app');

    app.controller('JobDetailsController', ['DataService', '$stateParams', JobDetailsController]);

    function JobDetailsController(DataService, $stateParams) {
        var vm = this;
        vm.test = 'test';

        DataService.getJob($stateParams.id)
            .then(function (response) {
                vm.job = response;
            })
            .catch(function (response) {
                throw response;
            });
    }
}());
