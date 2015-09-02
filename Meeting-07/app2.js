	var now = new Date();
	//JavaScript Object Notation (JSON)
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
	
	function performClick(){
	 	document.getElementById('meetingDate').innerHTML = "Meeting Date:"  + data.meetingDate;
	 	document.getElementById('meetingName').innerHTML = "Meeting Name:"  +data.meetingName;
	 	document.getElementById('mettingContent').innerHTML = "Meeting Content:"  +data.mettingContent;
	}

	function cancelMeeting(){
	 	data.cancel(data.notifySomeone);
	}