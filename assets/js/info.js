$("#head").on('mouseenter touchstart', function(e) {
  $(this).attr("src","images/head2.jpg");
  if (e.pageX != undefined) {
  	/* 扣血機制 */
  	var hp = Math.round($("div#inner-health").width() / $('div#inner-health').parent().width() * 100);
  	var hbar = $("div#inner-health");
  	if (hp > 0) {
  	  hbar.css("width","-=1%");
  	  if (hp <= 21) {
  	  	hbar.css("background-color", "#FF0000");
  	  } else if (hp <= 51) {
  	  	hbar.css("background-color", "#FF8800");
  	  } else if (hp <= 71) {
  	  	hbar.css("background-color", "#FFFF00");
  	  }
  	  /* 動畫顯示 */
      /* 創建物件 */
      var cl = 'a' + Math.floor((Math.random() * 100) + 1);
      var obj = "<div id=\"minus1\" class=\"" + cl + "\">-1</div>"
      var outer = $("div#outer-health");
      outer.after(obj);
      console.log(obj);
      var $target = $("div." + cl);
      $target.css({
        left: e.pageX,
        top: e.pageY
      });
      $target.show();
      $target.animate({ 'top': '-=50'}, 500, function(){
      }).fadeOut(500, function() {
        $target.remove();
      });
  	} else {
  		/* 沒寫了 */
  	}
  }

  // Jerry 扣 1 D血量
  // bar value -= 1
  // jump -1 text beside mouse
});

$("#head").on('mouseleave touchend', function() {
  $(this).attr("src","images/head.jpg");
});

$("li > a").on('mouseenter touchstart', function() {
  $(this).css('color', 'white');
});

$("li > a").on('mouseleave touchend', function() {
  $(this).css('color', '#2f2f2f');
});
/*
$("#head").on("taphold", function( event ) {

});*/