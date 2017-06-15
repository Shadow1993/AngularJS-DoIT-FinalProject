(function () {
    'use strict';

    var app = angular.module('app');

    app.factory('DataService', ['$http', '$q', DataService]);

    function DataService($http, $q) {

        return {
            getJobs: getJobs,
            getJob: getJob,
            getResumes: getResumes,
            getResume: getResume,
            authorize: authorize
        };

        function ReturnError(response) {
            return $q.reject('Error: ' + response.status);
        }

        function ReturnData(response) {
            return response.data;
        }

        function getJobs() {
            return $http({
                method: 'GET',
                url: '/api/jobs'
            })
                .then(ReturnData)
                .catch(ReturnError);
        }

        function getJob(id) {
            return $http({
                method: 'GET',
                url: '/api/jobs/' + id
            })
                .then(ReturnData)
                .catch(ReturnError);
        }

        function getResumes() {
            return $http({
                method: 'GET',
                url: '/api/resumes'
            })
                .then(ReturnData)
                .catch(ReturnError);
        }

        function getResume(id) {
            return $http({
                method: 'GET',
                url: '/api/resumes/' + id
            })
                .then(ReturnData)
                .catch(ReturnError);
        }

        function authorize() {
            return $http({
                method: 'POST',
                url: '/user/authorize'
            })
                .then(ReturnData)
                .catch(ReturnError);
        }

        function createCompany(data) {
            return $http({
                method: 'POST',
                data: data,
                url: 'https://89.216.54.220:44321/company/create'
            })
            .then(ReturnData)
            .catch(ReturnError);
        }

    }
}());
