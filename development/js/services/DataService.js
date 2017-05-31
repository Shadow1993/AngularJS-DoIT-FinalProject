(function () {
    'use strict';

    var app = angular.module('app');

    app.factory('DataService', ['$http', '$q', DataService]);

    function DataService($http, $q) {

        return {
            getJobs: getJobs,
            getJob: getJob
        };

        function getJobs() {
            return $http({
                method: 'GET',
                url: '/api/jobs'
            })
            .then(function(response) {
                return response.data;
            })
            .catch(function(response) {
                return $q.reject('Error: ' + response.status);
            });
        }

        function getJob(id) {
            return $http({
                method: 'GET',
                url: '/api/jobs/' + id
            })
            .then(function(response) {
                return response.data;
            })
            .catch(function(response) {
                return $q.reject('Error: ' + response);
            });
        }
    }
}());
