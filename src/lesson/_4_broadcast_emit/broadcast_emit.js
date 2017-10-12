import angular from 'angular';

import './broadcast_emit.scss';
/**
 * Broadcast & emit Lesson
 */
const broadcastEmitModule = angular.module('broadcastEmitModule',[]);

// grandParent controller
broadcastEmitModule.controller('broadcastEmitCtrl', ['$scope', ($scope) => {
    $scope.value = "";
    // grand parent input model
    $scope.grandParentInput = "";
    // broadcast btn
    $scope.broadcast = () => {
        $scope.$broadcast('rootBroad', { value: $scope.grandParentInput});
    };
    // clear btn
    $scope.clear = () => {
        $scope.grandParentInput = "";
        $scope.broadcast();
    };

     // child on
     $scope.$on('childEmit', function(ev,res){
        $scope.value = res.value;
    });

}]);

// parent controller
broadcastEmitModule.controller('parentCtrl', ['$scope', ($scope) => {
    // parent value
    $scope.value = "";
    // parent input model
    $scope.parentInput = "";
    // parent broadcast
    $scope.broadcast = () => {
        $scope.$broadcast('parentBroad', { value: $scope.parentInput});
    };
    // clear btn
    $scope.clear = () => {
        $scope.parentInput = "";
        $scope.broadcast();
    };

    // preant on
    $scope.$on('rootBroad', function(ev,res){
        $scope.value = res.value;
    });

     // child on
     $scope.$on('childEmit', function(ev,res){
        $scope.value = res.value;
    });

}]);

// another controller
broadcastEmitModule.controller('parentCtrl2', ['$scope', ($scope) => {
    // another parent value
    $scope.value = "";

    // grand parent on
    $scope.$on('rootBroad', function(ev,res){
        $scope.value = res.value;
    });

    // same level on
    $scope.$on('parentBroad', function(ev,res){
        $scope.value = res.value;
    });

     // child on
     $scope.$on('childEmit', function(ev,res){
        $scope.value = res.value;
    });

}]);

// child controller
broadcastEmitModule.controller('childCtrl', ['$scope', ($scope) => {
    // child value
    $scope.value = "";
    // child input value
    $scope.childInput = "";

    $scope.emit = () => {
        // child emit
        $scope.$emit('childEmit', { value: $scope.childInput});
    };
    // clear btn
    $scope.clear = () => {
        $scope.childInput = "";
        $scope.emit();
    };

    // grand parent on
    $scope.$on('rootBroad', function(ev,res){
        $scope.value = res.value;
    });

    // parent on
    $scope.$on('parentBroad', function(ev,res){
        $scope.value = res.value;
    });

}]);


export default broadcastEmitModule;