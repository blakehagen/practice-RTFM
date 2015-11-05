angular.module('rtfmApp').controller('threadsCtrl', function ($scope, threadsRef, $firebaseArray, threadsService) {

    $scope.threads = $firebaseArray(threadsRef);





});