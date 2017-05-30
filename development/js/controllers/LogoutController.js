(function() {
    'use strict';

    var app = angular.module('app');

    app.controller('LogoutController', ['$state', '$auth', LogoutController]);

    function LogoutController($state, $auth) {

        var vm = this;
        vm.test = 'test';

        if (!$auth.isAuthenticated()) {
            return $state.go('main.login');
        }
        $auth.logout()
            .then(function () {
                toastr.info('You have been logged out');
                $state.go('main.login');
            });
    }
}());
