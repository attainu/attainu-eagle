$(document).ready(function() {
	$('#go-back').on('click', function() {
		window.history.back();
	});

	$('#go-forward').on('click', function() {
		window.history.forward();
	});

	$('#go-fullscreen').on('click', function() {
		toggleFullScreen();
	});

	function toggleFullScreen() {
	  if (!document.fullscreenElement) {
	      document.documentElement.requestFullscreen();
	  } else {
	    if (document.exitFullscreen) {
	      document.exitFullscreen(); 
	    }
	  }
	}
});