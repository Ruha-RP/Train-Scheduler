//Getting the document ready
$(document).ready(function() {

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

//creating a variable for database
var database = firebase.database();




});//closing document.ready function