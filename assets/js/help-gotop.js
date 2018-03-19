$('div.footer > ul > li:first-child > a').click(function (e) { 
  e.preventDefault();
  $('div#main').animate({
      scrollTop: $('#main').offset().top - 20
  }, 'fast');
});