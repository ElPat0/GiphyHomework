//api key for giphy
//   HIqQtSoyCccofN3yGM5dSVHpNY0gyZU2

//
var userSearch = "";
var queryURL = "https://api.giphy.com/v1/gifs/trending?api_key=HIqQtSoyCccofN3yGM5dSVHpNY0gyZU2";
    
var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=" + userSearch +"&api_key=HIqQtSoyCccofN3yGM5dSVHpNY0gyZU2");
xhr.done(function(data) { 
console.log("success got data", data); });

$("#gifSearch").on("click", function() {
    //var keyword = $(this).attr("data-keyword");
    var queryURL = "https://api.giphy.com/v1/gifs/trending?api_key=HIqQtSoyCccofN3yGM5dSVHpNY0gyZU2&limit=10&rating=G";

$.ajax({
    url: queryURL,
    method: "GET"
})
    .then(function(response) {
        var results = response.data;

        for (var i = 0; i < results.length; i++) {
          var gifDiv = $("<div>");

          var rating = results[i].rating;

          var p = $("<p>").text("Rating: " + rating);

          var keywordImage = $("<img>");
          keywordImage.attr("src", results[i].images.fixed_height.url);

          gifDiv.prepend(p);
          gifDiv.prepend(keywordImage);

          $("#gifs-appear-here").prepend(gifDiv);
        }
    })
})
