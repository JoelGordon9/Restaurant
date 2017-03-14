$(document).ready(function(){
	$('#home, #contact, #menu').hover(
		function(){
			$(this).css("background-color", "rgb(196, 184, 157)");
		},
		function(){
			$(this).css("background-color", "rgb(226, 213, 183)");
		});
});