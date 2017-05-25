(function() {
    'use strict';

    var app = angular.module('app');

    app.controller('LogoutController', function ($state, $auth) {

        var vm = this;
        vm.test = 'test';

        if (!$auth.isAuthenticated()) {
            return $state.go('main.test', {}, { reload: 'main.test' });
        }
        $auth.logout()
            .then(function () {
                toastr.info('You have been logged out');
                $state.go('main.test', {}, { reload: 'main.test' });
            });
    });
}());
