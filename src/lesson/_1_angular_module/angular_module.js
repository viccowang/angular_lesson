import angular from 'angular';
/**
 * Angualr Module lesson
 */
const angularModule = angular.module('angularModule',[]);

// 控制器
angularModule.controller('angularModuleCtrl', ['$scope', ($scope) => {

    $scope.helloText = '你好, 中航讯!';

}]);

// 服务
angularModule.factory('angularModuleService', ['$http', ($http) => {
    let service = {};
    
    service.getSomeValue = () => {

    }

    return service;

}]);

// 指令
angularModule.directive('highlightFont', () => {
    return {
        restrict: 'AE',
        link : (scope, tElement, tAttrs) => {
            tElement.css({
                'font-size': '1.2rem',
                'color' : '#FF0000'
            });
        }
    }
});


export default angularModule;
