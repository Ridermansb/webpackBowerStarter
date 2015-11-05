require('./app.scss');

var HomeController = require('./components/home/homeController');

console.log('I"m a Stamplay', Stamplay, ' and init ', Stamplay.init);
console.log('angular is', angular);

module.exports =
    angular.module('app', ['ui.router', 'ngMaterial', 'ngAria', 'ngAnimate']) //'ngStamplay'
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
