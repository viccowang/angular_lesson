import angular from 'angular';

/**
 * Directives Lesson
 */
const directivesModule = angular.module('directivesModule',[]);

directivesModule.controller('directiveCtrl', ['$scope', ($scope) => {

    // 指令的参数
    $scope.directiveColor = '#ff0000';

}]);

// custom directive
directivesModule.directive('helloWorld', ()=>{
    return {
        restrict: 'AE',    // 指定指令是Attribute or Element
        scope: {           // 是否是独立作用域
            color: '='      // = 为双向绑定表达式,  @ 单向绑定字符串  & 可以绑定父控制器的event事件
        },
        // 与页面dom进行绑定(LINK), 会同时接收到三个参数.(如果有有父指令,还可以接收第三个参数作为父指令控制器的引用)
        link: (scope, tElement, tAttrs) => {    
            // 设置当前DOM的一个样式
            tElement.css({
                color: scope.color,
                fontSize: '3rem'
            });
            
        }
    }
})

export default directivesModule;