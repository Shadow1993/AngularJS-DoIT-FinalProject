(function() {
    'use strict';

    var app = angular.module('app');

    app.controller('LoginController', ['$state', '$auth', LoginController]);

    function LoginController($state, $auth) {
        var vm = this;
        vm.test = 'test';

        vm.login = function () {
            $auth.login(vm.user)
                .then(function () {
                    toastr.success('You have successfully signed in!');
                    $state.go('main.test');
                })
                .catch(function (error) {
                    toastr.error(error.data.message, error.status);
                });
        };
        vm.authenticate = function (provider) {
            $auth.authenticate(provider)
                .then(function () {
                    toastr.success('You have successfully signed in with ' + provider + '!');
                    $state.go('main.test');
                })
                .catch(function (error) {
                    if (error.message) {
                        // Satellizer promise reject error.
                        toastr.error(error.message);
                    } else if (error.data) {
                        // HTTP response error from server
                        toastr.error(error.data.message, error.status);
                    } else {
                        toastr.error(error);
                    }
                });
        };
    }
}());
