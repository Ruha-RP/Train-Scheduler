//Getting the document ready
$(document).ready(function() {

//STEP 1:
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

//STEP 2:
//Creating the on-click function 
$("#submitInfo").on("click", function(event) {

	//Preventing the form from auto-submitting
	event.preventDefault();

	//checking if button works
	console.log("Submit button has been clicked!");



});//closing the on-click function



});//closing document.ready function