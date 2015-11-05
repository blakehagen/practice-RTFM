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
            resolve: {threadsRef: function(threadsService){
                return threadsService.getThreads();
            }}
        })
        .state('thread', {
            url: '/threads/:threadId',
            templateUrl: 'app/thread/thread.html',
            controller: 'threadCtrl',
            resolve: {
                threadRef: function(threadsService, $stateParams){
                    return threadsService.getThread($stateParams.threadId);
                },
                commentsRef: function(threadsService, $stateParams){
                    return threadsService.getComments($stateParams.threadId);
                }
            }
        })

    $urlRouterProvider
        .otherwise('/threads');


});

