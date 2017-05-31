(function () {
    'use strict';

    var app = angular.module('app');

    app.controller('RegisterController', ['$state', '$auth', RegisterController]);

    function RegisterController($state, $auth) {
        var vm = this;
        vm.test = 'test';

        if ($auth.isAuthenticated()) {
            $state.go('main.findajob');
        }

        vm.signup = function () {
            $auth.signup(vm.user)
                .then(function (response) {
                    $auth.setToken(response);
                    $state.go('main.findajob');
                    toastr.info('You have successfully created a new account and have been signed-in');
                })
                .catch(function (response) {
                    toastr.error(response.data.message);
                });
        };
    }
}());
