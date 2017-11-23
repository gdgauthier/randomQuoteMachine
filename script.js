$(function() {

  getQuote();
  $("#button-quote").click(function() { getQuote(); });

});

function getQuote() {

  var author = $("#author");
  var quote = $("#quote");
  var forismatic = "https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?";

  $.getJSON(forismatic, function(data) {

    quote.text(data.quoteText);

    if (data.quoteAuthor) {
      author.text(data.quoteAuthor);
    } 
    else {
      author.text("Anonymous");
    }

    var tweet = data.quoteText +  " -" + data.quoteAuthor;

    if (tweet.length >=141) {
      alert("Next tweet will be longer than 140 characters.");
    } else {}

    $("#tweet").attr("href", "https://twitter.com/intent/tweet?hashtags=quotes&text=" + tweet);

  });

}