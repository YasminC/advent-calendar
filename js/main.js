	function initialize(){

		var video = $("#videocont").get(0);
		if( navigator.userAgent.match(/Android/i) && ($(window).width() >= 900)
 			|| navigator.userAgent.match(/iPad/i) && ($(window).width() >= 900)
 			|| navigator.userAgent.match(/Windows Phone/i)  && ($(window).width() >= 900) ) {
 		document.getElementById('videocont').style.display = "none";
 		document.getElementById('desktop').style.display = "block";
 		document.getElementById('social').style.display = "block";

		} else if( !navigator.userAgent.match(/Android/i) && ($(window).width() >= 900)
 			|| !navigator.userAgent.match(/iPad/i) && ($(window).width() >= 900)
 			|| !navigator.userAgent.match(/Windows Phone/i)  && ($(window).width() >= 900) ) {
		document.getElementById('videocont').style.display = "block";
	}

		if ($('#videocont').is(':visible')) {
			video.play();
			video.addEventListener("ended", function(e) {
				console.log('videoended');
				
        		$("#videocont").fadeOut("slow");
				
				$("#desktop").fadeIn("slow");
				
				$("#social").fadeIn("slow");
    	});
	}
	window.onresize = function(event)
	{
		document.location.reload(true);
	}
}

		window.addEventListener('load', function(e) {
	setTimeout(function()
		{
			initialize();	
		}, 200);
});