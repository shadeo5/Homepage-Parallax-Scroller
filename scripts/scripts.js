$(document).ready(function () {
	
	//initialize Stellar JS
	$('.stellar_container').stellar({
		horizontalOffset : 0,
		verticalOffset : 0,
		hideDistantElements : true,
		viewportDetectionInterval : 500
	});



	//cache variable
	var $sliderNavigation = $('.container_navigation').find('li');
	var $Slide           = $('.row');


	//Setup waypoints plugin
	$Slide.waypoint(function (event, direction){
		console.log('here');
	});


});