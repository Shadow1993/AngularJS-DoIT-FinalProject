(function () {
    'use strict';

    var app = angular.module('app');

    app.factory('UserProfile', ['$http', UserProfile]);

    function UserProfile($http) {

        return {
            getProfile: getProfile
        };

        function getProfile() {
            return $http({
                method: 'GET',
                url: '/api/me'
            })
                .then(function (response) {
                    return response.data;
                })
                .catch(function (response) {
                    return 'We couldn\'t get User Data: ' + response;
                });
        }
    }
}());
