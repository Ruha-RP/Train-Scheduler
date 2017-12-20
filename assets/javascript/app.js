//Getting the document ready
$(document).ready(function() {

//STEP 1: CONNECTING TO FIREBASE
// Initialize Firebase
var config = {
	apiKey: "AIzaSyB44JcP2uAlCtSsazMZql0TmOotmwnGcIo",
	authDomain: "train-scheduler-995b7.firebaseapp.com",
	databaseURL: "https://train-scheduler-995b7.firebaseio.com",
	projectId: "train-scheduler-995b7",
	storageBucket: "train-scheduler-995b7.appspot.com",
	messagingSenderId: "657247607969"
	};

firebase.initializeApp(config);

//Creating the varaibale for database
var database = firebase.database();

//STEP 2: THE ON-CLICK BUTTON
//Creating the on-click function 
$("#submitInfo").on("click", function(event) {

	//Preventing the form from auto-submitting
	event.preventDefault();

	//checking if button works
	console.log("Submit button has been clicked!");

	//obtaining the user input
	var trainName = $("#trainInput").val().trim();
	var destination = $("#destinationInput").val().trim();
	var trainTime = $("#timeInput").val().trim();
	var frequency = $("#frequencyInput").val().trim();

	//STEP 3: PUSHING TO FIREBASE
	//creating an object that will push the values to the database
	var newTrain = {
		name: trainName,
		destination: destination,
		time: trainTime,
		frequency : frequency
	};

	//pushing the object to firebase
	database.ref().push(newTrain);


	//emptying out the form after submitting
	 $("#trainInput").val("");
	 $("#destinationInput").val("");
	 $("#timeInput").val("");
	 $("#frequencyInput").val("");

	 });//closing the on-click function


	//Monitoring the changes that are being made to the database
	database.ref().on("child_added", function(childSnapshot, prevChildKey) {

		//checking if it works, this will give the child
		console.log(childSnapshot.val());

		//console logging each value to check
		console.log(childSnapshot.val().name);
		console.log(childSnapshot.val().destination);
		console.log(childSnapshot.val().time);
		console.log(childSnapshot.val().frequency);

		//STEP 4: DISPLAY INPUT ON HTML TABLE
		//create variables
		var nameT = childSnapshot.val().name;
		var destinationT = childSnapshot.val().destination;
		var freqT = childSnapshot.val().frequency;

		//STEP 5: CALCULATIONS
		


		//dynamically create a new row that will hold the information
		$("#train-info > tbody").append("<tr><td>" + nameT + "</td><td>" + destinationT + "</td><td>" + freqT + "</td></tr>");



	});//closing child added









   
});//closing document.ready function