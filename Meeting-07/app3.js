/* global angular */
(function () {
   "use strict";
}());

angular.module("myapp", []).controller("index3Controller", function($scope, $http){
    var index3Controller = this;
	
	var now = new Date();

	// JavaScript Object Notation (JSON)
	
	var data = {
		meetingDate: now, 
		meetingName: "Study Group 7th Meeting",
	    mettingContent: "JavaScriptBasic",
	    attendees: [
	    	{name: "Eric", 
	    	 dept: "INFRA"}, 
	    	{name: "Jason", 
	    	 dept: "INFRA"},
	    	{name: "Jack", 
	    	 dept: "EC"}],
	    cancel: function(callbackFunction){
	    	console.log("cancel this meeting and reschedule...");
	    	callbackFunction();
	    },

	    notifySomeone: function(){
	    	console.log("you received reschedule notification.");
	    }
	};
	index3Controller.performClick = function() {
		console.log("perfromClick");
		$scope.meetingDate = "Meeting Date:"  + data.meetingDate;
		$scope.meetingName = "Meeting Name:"  + data.meetingName;
		$scope.mettingContent = "Meeting Content:"  + data.mettingContent;
	};
	
	index3Controller.cancelMeeting = function() {
	  	data.cancel(data.notifySomeone);
	};
	
	
  });