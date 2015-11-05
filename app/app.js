angular.module('rtfmApp', ['firebase', 'ui.router'])

    .constant('fb', {
        url: 'https://practice-rtfm-proj.firebaseio.com/'
    })

    .config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider
        .state('threads', {
            url: '/threads',
            templateUrl: 'app/threads/threads.html',
            controller: 'threadsCtrl',
            resolve: {threadsRef: function(threadService){
                return threadService.getThreads();
            }}
        })
        .state('threadsId', {
            url: '/threads/:threadId'
        })

    $urlRouterProvider
        .otherwise('/threads');


});

