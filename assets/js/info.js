$("#head").on('mouseenter touchstart', function() {
  $(this).attr("src","images/head2.jpg");
});

$("#head").on('mouseleave touchend', function() {
  $(this).attr("src","images/head.jpg");
});

$("li > a").on('mouseenter touchstart', function() {
  $(this).css('color', 'white');
})

$("li > a").on('mouseleave touchend', function() {
  $(this).css('color', '#2f2f2f');
})