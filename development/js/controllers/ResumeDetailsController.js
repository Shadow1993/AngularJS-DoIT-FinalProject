(function() {
    'use strict';

    var app = angular.module('app');

    app.controller('ResumeDetailsController', ['DataService', '$stateParams', ResumeDetailsController]);

    function ResumeDetailsController(DataService, $stateParams) {
        var vm = this;
        vm.test = 'test';

        DataService.getResume($stateParams.id)
            .then(function(res) {
                console.log(res);
                vm.data = res;
            })
            .catch(function(res) {
                console.error(res);
            })
    }
}());
