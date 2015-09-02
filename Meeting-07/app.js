	

angular.module("myMeeting",[])

.controller("MyController", function($scope){
     
  	//JavaScript Object Notation (JSON)
	var meetingData = {
		meetingDate: Date(),
		meetingName: "Study Group",
		meetingContent: "Java Script Basic",
		attendees: ["eric", "jason", "louise","joseph"],
		cancelMeeting: function(callback){
			$scope.status = "Cancel at "+ Date();
			callback("Jason");
		},

		notifySomeOne: function(someone){
			console.log("Notified...."+ someone);
		}
	}

	this.data = meetingData;

	this.display = function(){
		$scope.meetingDate = meetingData.meetingDate;

		$scope.meetingName = meetingData.meetingName;

		$scope.meetingContent = meetingData.meetingContent;
		var attendees = "";
		for(i=0; i< meetingData.attendees.length; i++){
			attendees	+= meetingData.attendees[i];
		}

		$scope.attendees = attendees;
	}

	this.cancel = function(){
		meetingData.cancelMeeting(meetingData.notifySomeOne);
	}


  });











	
