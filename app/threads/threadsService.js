angular.module('rtfmApp').service('threadsService', function (fb) {
    
    
    // var firebaseRef = new Firebase('https://practice-rtfm-proj.firebaseio.com/');


    this.getThreads = function () {
        return new Firebase(fb.url + '/threads');
    }

    this.getThread = function (threadId) {
        return new Firebase(fb.url + '/threads/' + threadId);
    }

    this.getComments = function (threadId) {
        return new Firebase(fb.url + '/threads/' + threadId + '/comments');
    }




    this.getTime = function () {
        function getZone() {
            var dateStr = Date().toString();
            var dateArr = dateStr.split(' ');
            var zone = dateArr[dateArr.length - 1];
            return zone;
        } 
        var zone = getZone();
        var date = moment().format('lll ') + zone;
        return date;
    }






});