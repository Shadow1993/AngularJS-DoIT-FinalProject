(function() {
    'use strict';

    var app = angular.module('app');

    app.controller('LogoutController', function ($state, $auth) {

        var vm = this;
        vm.test = 'test';

        if (!$auth.isAuthenticated()) {
            return;
        }
        $auth.logout()
            .then(function () {
                toastr.info('You have been logged out');
                $state.go('main.test');
            });
    });
}());
