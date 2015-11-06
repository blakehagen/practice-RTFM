
angular.module('rtfmApp').controller('threadsCtrl', function ($scope, $firebaseAuth, fb, $firebaseObject, threadsRef, $firebaseArray, threadsService) {

    var firebaseRoot = fb.url;
    var ref = new Firebase(firebaseRoot);
    var authObj = $firebaseAuth(ref);

    $scope.authObj = authObj;


    authObj.$onAuth(function (authData) {
        $scope.authData = authData;

        if (authData) {
            var userRef = new Firebase(fb.url + '/users/' + authData.uid);
            var user = $firebaseObject(userRef);

            user.$loaded().then(function (user) {
                user.lastLogin = new Date().toString();
                user.$save();
                user.$bindTo($scope, 'user');
            });
        }
    });

    $scope.googleLogin = function () {
        authObj.$authWithOAuthPopup('google');
    };

    var usersRef = new Firebase(firebaseRoot + '/users');
    var users = $firebaseArray(usersRef);

    $scope.users = users;

    $scope.addUser = function (user) {
        users.$add(user);
    }

    $scope.threads = $firebaseArray(threadsRef);

    $scope.createThread = function (username, title) {
        $scope.threads.$add({
            username: username,
            title: title,
            timestamp: threadsService.getTime()
        });
    };



});




