$("ul.menu > li:first-child > a").click(function() {
  var key;
  do {
  	key = prompt("請輸入你的學號");
  } while(key.length < 9);
  var url = 'https://script.google.com/macros/s/AKfycbwoyxrSc5dmqyZa-u2nd3F5FFXjw0_6DhqzTzgybUAe19UmFdU/exec?key=';
  $.getJSON(url+key,function(data) {
  	console.log(data);
  });
});



/*
$(function(){
    
});*/