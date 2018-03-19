var $main = $("#main");
$(function(){
	$main.on('mouseenter touchstart', function() {
		$(this).removeClass("hide");
		$(this).addClass("show");
	})
	.on('mouseout touchend', function() {
		$(this).removeClass("show");
		$(this).addClass("hide");
	});
});