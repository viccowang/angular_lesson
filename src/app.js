import angular from 'angular';
import uirouter from '@uirouter/angularjs';

import '../node_modules/bootstrap/dist/css/bootstrap.css';

// global css
import './app.scss';

// Import lessons
import homeModule from './lesson/home';
import angularModule from './lesson/_1_angular_module/angular_module';
import angularJqueryModule from './lesson/_2_angular_jquery/angular_jquery';
import promiseModule from './lesson/_3_promise/promise';
import broadcastEmitModule from './lesson/_4_broadcast_emit/broadcast_emit';
import directivesModule from './lesson/_5_directives/directives';

// Main Module
const myApp = angular.module('myApp', [
    uirouter,
    homeModule.name,
    angularModule.name,
    angularJqueryModule.name,
    promiseModule.name,
    broadcastEmitModule.name,
    directivesModule.name
]);
// Main Module Configirations
myApp.config(['$stateProvider','$urlRouterProvider', ($stateProvider,$urlRouterProvider) => {

    const routes = [
        {
            name: homeModule.name,
            url: '/home',
            templateUrl: 'src/lesson/home.html'
        },
        {
            name: angularModule.name,
            url: '/angular-module',
            templateUrl: 'src/lesson/_1_angular_module/angular_module.html'
        },
        {
            name: angularJqueryModule.name,
            url: '/angular-jquery',
            templateUrl: 'src/lesson/_2_angular_jquery/angular_jquery.html'
        },
        {
            name: promiseModule.name,
            url: '/promise',
            templateUrl: 'src/lesson/_3_promise/promise.html'
        },
        {
            name: broadcastEmitModule.name,
            url: '/boradcast-emit',
            templateUrl: 'src/lesson/_4_broadcast_emit/broadcast_emit.html'
        },
        {
            name: directivesModule.name,
            url: '/directives',
            templateUrl: 'src/lesson/_5_directives/directives.html'
        }
    ];

    $urlRouterProvider.otherwise('home');

    routes.forEach(state => {
        $stateProvider.state(state);
    });

}])
