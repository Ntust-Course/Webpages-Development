$("#head").on('mouseenter touchstart', function() {
  $(this).attr("src","images/head2.jpg");
})

$("#head").on('mouseleave touchend', function() {
  $(this).attr("src","images/head.jpg");
})