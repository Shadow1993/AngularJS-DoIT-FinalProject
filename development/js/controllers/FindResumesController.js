(function() {
    'use strict';

    var app = angular.module('app');

    app.controller('FindResumesController', ['DataService', FindResumesController]);

    function FindResumesController(DataService) {
        var vm = this;
        vm.test = 'test';

        DataService.getResumes()
            .then(function(response) {
                console.log(response);
                vm.resumes = response;
            })
            .catch(function(response) {
                throw response;
            });
    }
}());
