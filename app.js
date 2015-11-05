// require('./app.scss'); // Err: SyntaxError: missing ) after argument list (in app.scss)
console.clear();

var HomeController = require('./components/home/homeController');

console.assert(angular != null, 'Angular object is not defined');
console.assert(typeof(Stamplay.init) === 'function', 'Stamplay.init is not a function', Stamplay);

module.exports =
    angular.module('app', ['ui.router', 'ngMaterial', 'ngAria', 'ngAnimate']) // WHEN add module dependency to 'ngStamplay' -> ERR: TypeError: angular.module is not a function (in angular-stamplay.js)
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
