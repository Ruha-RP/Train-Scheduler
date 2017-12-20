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


	//Monitoring the changes that are being made to the database
	database.ref().on("child_added", function(snapshot) {

		//checking if it works, this will give the child
		console.log(snapshot.val());

		// //sending to the html file
		// $("#train-name").text(train-name);
		// $("#destination").text(train-name);
		// $("#frequency").text(train-name);


	});






});//closing the on-click function



});//closing document.ready function