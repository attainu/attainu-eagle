$(document).ready(function() {
	$('.availability').on('click', function() {
		console.log("Clicked")
		$(this).toggleClass('btn-success btn-danger');
	});
});