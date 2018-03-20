$("form.search-content").submit(function(e) {
  event.preventDefault();
  var $inputs = $('form.search-content :input');
  var values = {};
  $inputs.each(function() {
    values[this.name] = $(this).val();
  });
  var key = values['key'];
  var input = '<h3>你的作業查詢小助手</h3><p>助教不會寫程式 請不要操他<br>有問題請回報助教</p>';
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
    $("div.search-container").children().hide(); 
    $("div.search-container").append("<p>"+ output + "</p>");
  }).fail(function() {
    console.log('error')
    $("#search_form").css("display","none");
    $('#search_error').show();
  });
});