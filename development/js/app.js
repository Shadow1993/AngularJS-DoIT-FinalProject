'use strict';

var app = angular.module('app', ['ui.router', 'satellizer']);

app.config(function($locationProvider, $stateProvider, $urlRouterProvider, $authProvider) {

    /**
     * Helper auth functions
     */
    function skipIfLoggedIn($q, $auth) {
        var deferred = $q.defer();
        if ($auth.isAuthenticated()) {
            deferred.reject();
        } else {
            deferred.resolve();
        }
        return deferred.promise;
    }

    function loginRequired($q, $location, $auth) {
        var deferred = $q.defer();
        if ($auth.isAuthenticated()) {
            deferred.resolve();
        } else {
            $location.path('/login');
        }
        return deferred.promise;
    }

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
            controllerAs: 'login',
            resolve: {
                skipIfLoggedIn: skipIfLoggedIn
            }
        },
        register: {
            name: 'main.register',
            url: '/register',
            templateUrl: './../templates/register.html',
            resolve: {
                skipIfLoggedIn: skipIfLoggedIn
            }
        },
        profile: {
            name: 'main.profile',
            url: '/profile',
            templateUrl: './../templates/profile.html',
            controller: 'ProfileController',
            resolve: {
                loginRequired: loginRequired
            }
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
        jobdetails: {
            name: 'main.jobdetails',
            url: '/jobdetails',
            templateUrl: './../templates/jobdetails.html',
            controller: 'JobDetailsController',
            controllerAs: 'job'
        },
        resumedetails: {
            name: 'main.resumedetails',
            url: '/resumedetails',
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

    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/login');

    $authProvider.google({
        clientId: '195416828444-nqkuuv98i94ai28nvfu480q5q4fr3cor.apps.googleusercontent.com'
    });
});
