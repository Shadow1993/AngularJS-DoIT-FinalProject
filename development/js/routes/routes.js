(function () {
    'use strict';

    var app = angular.module('app');

    app.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {

        //State Definition
        var states = {
            home: {
                name: 'home',
                abstract: 'true',
                views: {
                    '@': {
                        templateUrl: './../templates/home.html'
                    },
                    'header@home': {
                        templateUrl: './../templates/header.html',
                        controller: 'HeaderController',
                        controllerAs: 'header'
                    },
                    'main@home': {
                        templateUrl: './../templates/main.html'
                    }
                }
            },
            main: {
                name: 'main',
                abstract: true,
                parent: 'home',
                templateUrl: './../templates/main.html'
            },
            test: {
                name: 'main.test',
                url: '/',
                templateUrl: './../templates/test.html'
            },
            login: {
                name: 'main.login',
                url: '/login',
                templateUrl: './../templates/login.html',
                controller: 'LoginController',
                controllerAs: 'login'
                // resolve: {
                //     nesto: function($q, $auth) {
                //         var deferred = $q.defer();
                //         console.log(deferred);
                //         console.error('1');
                //         if ($auth.isAuthenticated()) {
                //             console.log(deferred);
                //             console.error('2');
                //             deferred.reject();
                //         } else {
                //             console.log(deferred);
                //             console.error('3');
                //             deferred.resolve();
                //         }
                //         console.log(deferred);
                //         console.error('4');
                //         return deferred.promise;
                //     }
                // }
            },
            register: {
                name: 'main.register',
                url: '/register',
                templateUrl: './../templates/register.html',
                controller: 'RegisterController',
                controllerAs: 'register'
            },
            profile: {
                name: 'main.profile',
                url: '/profile',
                templateUrl: './../templates/profile.html',
                controller: 'ProfileController'
            },
            logout: {
                name: 'main.logout',
                url: '/logout',
                template: null,
                controller: 'LogoutController'
            },
            findajob: {
                name: 'main.findajob',
                url: '/findajob',
                templateUrl: './../templates/findajob.html',
                controller: 'FindAJobController',
                controllerAs: 'jobs'
            },
            jobdetails: {
                name: 'main.jobdetails',
                url: '/findajob/:id',
                templateUrl: './../templates/jobdetails.html',
                controller: 'JobDetailsController',
                controllerAs: 'job'
            },
            findresumes: {
                name: 'main.findresumes',
                url: '/findresumes',
                templateUrl: './../templates/findresumes.html',
                controller: 'FindResumesController',
                controllerAs: 'resumes'
            },
            postajob: {
                name: 'main.postajob',
                url: '/postajob',
                templateUrl: './../templates/postajob.html',
                controller: 'PostAJobController',
                controllerAs: 'post'
            },
            aboutus: {
                name: 'main.aboutus',
                url: '/aboutus',
                templateUrl: './../templates/aboutus.html',
                controller: 'AboutUsController',
                controllerAs: 'about'
            },
            contactus: {
                name: 'main.contactus',
                url: '/contactus',
                templateUrl: './../templates/contactus.html',
                controller: 'ContactUsController',
                controllerAs: 'contact'
            },
            articlesnblog: {
                name: 'main.articlesnblog',
                url: '/articlesnblog',
                templateUrl: './../templates/articlesnblog.html',
                controller: 'ArticlesnBlogController',
                controllerAs: 'articles'
            },
            termsnprivacy: {
                name: 'main.termsnprivacy',
                url: '/termsnprivacy',
                templateUrl: './../templates/termsnprivacy.html',
                controller: 'TermsnPrivacyController',
                controllerAs: 'terms'
            },
            resumedetails: {
                name: 'main.resumedetails',
                url: '/resumedetails/:id',
                templateUrl: './../templates/resumedetails.html',
                controller: 'ResumeDetailsController',
                controllerAs: 'resume'
            },
            companyprofile: {
                name: 'main.companyprofile',
                url: '/companyprofile',
                templateUrl: './../templates/companyprofile.html',
                controller: 'CompanyProfileController',
                controllerAs: 'company'
            }
        };
        //State Initialization
        $stateProvider
            .state(states.home)
            .state(states.main)
            // TESTING PURPOSES ROOT
            // .state(states.test)
            .state(states.login)
            .state(states.logout)
            .state(states.register)
            .state(states.profile)
            .state(states.findajob)
            .state(states.findresumes)
            .state(states.postajob)
            .state(states.aboutus)
            .state(states.contactus)
            .state(states.articlesnblog)
            .state(states.termsnprivacy)
            .state(states.jobdetails)
            .state(states.resumedetails)
            .state(states.companyprofile);

        //Nice URLs
        $locationProvider.html5Mode(true);
        //Default Redirect
        $urlRouterProvider.otherwise('/login');

    });
}());
