$(".menu a").click((e)=>{
  var $articles = $("#article"),
      $main_articles = $articles.children("article")
  var id = e.target.closest("a").getAttribute("data-target");
  var $article = $main_articles.filter('#' + id);
  $article.show();
})