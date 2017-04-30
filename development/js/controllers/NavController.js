(function() {
    'use strict';

    var app = angular.module('app');

    app.controller('NavController', function($scope) {

        var vm = this;
        vm.test = 'test';

        var $myWindow = $(window);
        var mobMenu = $('#mobile-menu');

        var responsive = {
            tabletMin: 630,
            tabletMax: 896,
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

        function funcDeActivate() {
            mobMenu.text('|||');
        }

        function funcActivate() {
            mobMenu.text('X');
        }

        function mobileButtonHandler() {
            if (mobMenu.text() === 'X') {
                funcDeActivate();
            } else {
                funcActivate();
            }
        }

        $myWindow
            .on('click', function(event) {
                if (event.target.id !== 'mobile-menu') {
                    funcDeActivate();
                } else {
                    mobileButtonHandler();
                }
            })
            .on('resize', function() {
                funcDeActivate();
                responsive.current = $myWindow.width();
                displayMode();
                $scope.$apply();
            });
    });
}());
