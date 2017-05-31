(function() {
    'use strict';

    var app = angular.module('app');

    app.controller('HeaderController', ['$scope', '$auth', 'UserProfile', HeaderController]);

    function HeaderController($scope, $auth, UserProfile) {

        var vm = this;
        vm.test = 'test';

        var $myWindow = $(window);

        var responsive = {
            tabletMin: 600,
            tabletMax: 1024,
            current: $myWindow.width(),
            mode: ''
        };

        function responsiveNav() {
            if (responsive.current < responsive.tabletMin) {
                responsive.mode = 'mobile';
            } else if (responsive.tabletMin < responsive.current < responsive.tabletMax) {
                responsive.mode = 'tablet';
            } else {
                responsive.mode = 'desktop';
            }
        }

        function displayMode() {
            responsiveNav();
            if (responsive.mode === 'mobile') {
                $scope.responsive = true;
            } else {
                $scope.responsive = false;
            }
        }
        displayMode();

        vm.isAuth = function() {
            return $auth.isAuthenticated();
        };

        UserProfile.getProfile()
            .then(function(response) {
                vm.profile = response;
            });

        $myWindow
            .on('resize', function() {
                responsive.current = $myWindow.width();
                displayMode();
                $scope.$apply();
            });
    }
}());
