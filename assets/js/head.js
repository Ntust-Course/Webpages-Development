/*$().hover(function() {
  $("#head").fadeOut(function() { 
    $(this).on('load', function() { 
    	$(this).fadeIn(); 
    }); 
    $(this).attr("src", "images/head2.jpg"); 
  }); 
})*/

$("#head").mouseenter(function() {
	$(this).attr("src","images/head2.jpg");
}).mouseleave(function() {
  $(this).attr("src","images/head.jpg")
});