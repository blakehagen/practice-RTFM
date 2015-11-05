angular.module('rtfmApp', ['firesbase', 'ui.router'])

    .constant('fb', {
        url: 'https://practice-rtfm-proj.firebaseio.com/'
    })

    .config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider
        .state('threads', {
            url: '/threads',
            templateUrl: 'app/threads/threads.html',
            controller: 'threadsCtrl'
        })
        .state('threadsId', {
            url: '/threads/:threadId'
        })

    $urlRouterProvider
        .otherwise('/threads');


});

