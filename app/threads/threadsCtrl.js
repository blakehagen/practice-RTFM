angular.module('rtfmApp').controller('threadsCtrl', function ($scope, threadsRef, $firebaseArray, threadsService) {

    $scope.threads = $firebaseArray(threadsRef);
    
    $scope.createThread = function(username, title){
        $scope.threads.$add({
            username: username,
            title: title,
            timestamp: threadsService.getTime()
        });
    };





});