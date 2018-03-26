$("form.search-content").submit(function(e) {
  event.preventDefault();
  $("div.loader").show();
  var $inputs = $('form.search-content :input');
  var values = {};
  $inputs.each(function() {
    values[this.name] = $(this).val();
  });
  var key = values['key'];
  var input = '<h3>你的作業查詢小助手</h3><p>如果有問題<br>點擊螢幕右下角<br>向助教揮手</p>';
  var url = 'https://script.google.com/macros/s/AKfycbwoyxrSc5dmqyZa-u2nd3F5FFXjw0_6DhqzTzgybUAe19UmFdU/exec?key=';
  $.getJSON(url + key, function(data) {
    var output = input;
    for (var key in data) {
      if (data[key] != '') {
        output += '你的' + key + ': ' + data[key];
        output += '<br>';
      }
    }
    output = output.replace(/\SC/g, '作業成績');
    output = output.replace(/\EX/g, '考試成績');

    $("div.search-container").children().hide(); 
    $("div.search-container").append("<p>"+ output + "</p>");
    $("div.search-container").append('<p>如果你喜歡我們製作的網頁<br>歡迎點擊 $ 圖示捐贈我們醫療費<br>美金 1 元以上的任何價格<br>都可能是治好我們不治之症的關鍵</p>');
    $("div.loader").hide();
  }).fail(function() {
    console.log('error id not found')
    $("#search_form").css("display","none");
    $('#search_error').show();
    $("div.loader").hide();
  });
});