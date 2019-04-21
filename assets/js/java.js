//api key for giphy
//   HIqQtSoyCccofN3yGM5dSVHpNY0gyZU2

//
var userSearch = $("#srchField").val().trim();
var queryURL = "https://api.giphy.com/v1/gifs/trending?api_key=HIqQtSoyCccofN3yGM5dSVHpNY0gyZU2";
    
var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=" + userSearch +"&api_key=HIqQtSoyCccofN3yGM5dSVHpNY0gyZU2");
xhr.done(function(data) { 
console.log("success got data", data); });

var gifButtons = [];


function createInput(){
    var $input = $('<input type="button" value="srchField" />');
    $input.append($("#btnDisplay"));
}

$("#gifSearch").on("click", function() {
    //var keyword = $(this).attr("data-keyword");
    //var userSearch = "#srchField".val().trim();
    var userSearch = $("#srchField").val().trim();

    var queryURL = `https://api.giphy.com/v1/gifs/search?api_key=HIqQtSoyCccofN3yGM5dSVHpNY0gyZU2&q=${userSearch}&limit=25&offset=0&rating=G&lang=en`
    //var userSearch = "#srchField".val().trim();

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response) {
        var results = response.data;
        console.log("response check", response)
        

        for (var i = 0; i < results.length; i++) {
          var gifDiv = $("<div>");

          var rating = results[i].rating;

          var p = $("<p>").text("Rating: " + rating);

          var keywordImage = $("<img>");
          keywordImage.attr("src", results[i].images.fixed_height.url);

          gifDiv.prepend(p);
          gifDiv.prepend(keywordImage);

          $("#gifs-appear-here").prepend(gifDiv);

          
        };
    
        //var userBtn = $("<button>");
        //$("#btnDisplay").append(userBtn);
        //var userBtn = $("<button>");

    })
    .then(function(){
        var userBtn = $("<button>");
        userBtn.addClass("btn btn-info");
        userBtn.text(gifButtons[i]);
        $("#btnDisplay").append(userBtn);
        
    });
        //createInput};
});
    

