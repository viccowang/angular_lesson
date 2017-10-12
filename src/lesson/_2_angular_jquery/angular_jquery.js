import angular from 'angular';
import $ from 'jquery';
/**
 * Angualr & jQuery lesson
 */
const angularJqueryModule = angular.module('angularJqueryModule',[]);

angularJqueryModule.controller('angularJqCtrl', ['$scope','$timeout',($scope,$timeout) => {

    /**
     * 做一个延迟, 模拟异步加载
     */
    $scope.formVisibility = false;
    $timeout(() => {
        $scope.formVisibility = true;
    },500);

    // 推荐的数据绑定方式
    $scope.bindingValue = 'Hello Zhx!'

    // 不推荐使用jQuery绑定模式
    // 这种会造成与模板进入强耦合状态,不符合我们的设计模式;
    $("#jqueryValue").val('Hellp Zhx! by jQuery...');

}]);


export default angularJqueryModule;