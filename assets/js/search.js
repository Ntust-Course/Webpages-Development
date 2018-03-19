$("ul.menu > li:first-child > a").click(function() {
  var key;
  do {
  	key = prompt('你的作業查詢小助手 Version 1.0.0 \n(簡易版本不要操他QWQ) \n有bug找助教回報\n'+"※請輸入你的學號\n台科生:\nEX: B12345678\n台大或師大:\nEX: 台大B12345678");
  } while(key.length < 9);
  var url = 'https://script.google.com/macros/s/AKfycbwoyxrSc5dmqyZa-u2nd3F5FFXjw0_6DhqzTzgybUAe19UmFdU/exec?key=';
  try {
  	$.getJSON(url+key,function(data) {
  	  var output = '你的作業查詢小助手 Version 1.0.0 \n(簡易版本不要操他QWQ) \n有bug找助教回報\n';
  	  for (var key in data) {
  	  	if (data[key] != '') {
  	  		output += '你的' + key + ': ' + data[key];
  	  		output += '\n';
  	  	}
  	  }
  	  output = output.replace(/\SC/g,'成績');
  	  alert(output);
  	});
  } catch(err) {
  	console.log('error')
  }
});