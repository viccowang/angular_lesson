import angular from 'angular';

/**
 * Ajax & Promise
 */
const promiseModule = angular.module('promiseModule',[]);

promiseModule.controller('promiseCtrl', ['$scope','$q', '$timeout', ($scope, $q, $timeout) => {
    
    $scope.tableData = [];

    // step 1: 定义一个延迟对象;
    let deferred = $q.defer();

    // step 2: 模拟一个异步过程
    $scope.start = () => {
        const person = {
            name : 'Jack',
            age : 18
        }
        deferred.resolve(person);
    }

    // step 3: 接收到执行后状态的延迟对象
    deferred.promise
    //做异步处理
    .then(res => {
        $scope.tableData.push(res);
        return $scope.tableData;
    })
    //继续做异步处理
    .then(data => {
        $timeout(() => {
            data[0].sexy = 'Male';
        },2500);
        return data;
    })
    // 再添加一行数据
    .then(data2 => {
        $timeout(() => {
            data2.push({
                name : 'Han Mei mei',
                age: 17,
                sexy: 'Female'
            });
        },5000);
    })


}]);


export default promiseModule;