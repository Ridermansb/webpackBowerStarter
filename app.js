require('./app.scss');

var angular = require('angular');
var uiRouter = require('angular-ui-router');
var HomeController = require('./components/home/homeController');

var stamplay = require('stamplay-js-sdk');

module.exports =
    angular.module('app', [uiRouter, require('angular-material')])
        .config(['$stateProvider', '$urlRouterProvider',
            function ($stateProvider, $urlRouterProvider) {
                $urlRouterProvider.otherwise('/');
                $stateProvider
                    .state('home', {
                        url: '/',
                        controller: HomeController,
                        controllerAs: 'vm',
                        template: require('html!./components/home/homeView.html')
                    });
            }]
        )
        .controller('HomeController', HomeController)
        .name;
