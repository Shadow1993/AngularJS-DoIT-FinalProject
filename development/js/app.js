(function () {
    'use strict';

    var app = angular.module('app', ['ui.router', 'satellizer', 'DataMock']);

    app.config(function ($authProvider) {

        $authProvider.google({
            clientId: '195416828444-nqkuuv98i94ai28nvfu480q5q4fr3cor.apps.googleusercontent.com'
        });
    });
}());
