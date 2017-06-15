(function () {
    'use strict';

    var app = angular.module('app');

    app.controller('PostAJobController', ['DataService', PostAJobController]);

    function PostAJobController(DataService) {
        var vm = this;
        vm.test = 'test';

        // DataService.createCompany()
        //     .then(function (response) {
        //         vm.createCom = response;
        //         console.log(response);
        //     })
        //     .catch(function (response) {
        //         throw response;
        //     });

    }
}());
