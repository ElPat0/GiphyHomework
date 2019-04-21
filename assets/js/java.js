//api key for giphy
//   HIqQtSoyCccofN3yGM5dSVHpNY0gyZU2

//
var userSearch = $("#srchField").val().trim();
var queryURL = "https://api.giphy.com/v1/gifs/trending?api_key=HIqQtSoyCccofN3yGM5dSVHpNY0gyZU2";
    
var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=" + userSearch +"&api_key=HIqQtSoyCccofN3yGM5dSVHpNY0gyZU2");
xhr.done(function(data) { 
console.log("success got data", data); });

var gifButtons = [];

for (var j = 0; j < gifButtons.length; j++){
    createInput();
}
// This is supposed to add userSearch text to the gifButtons array, and then use a for loop to create a button for each string element

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
          keywordImage.attr("id='gif'");

          gifDiv.prepend(p);
          gifDiv.prepend(keywordImage);

          $("#gifs-appear-here").prepend(gifDiv);

          
        };
    
        var userBtn = $("<button>");
        userBtn.addClass("btn btn-info");
        userBtn.text(userSearch)
        $("#btnDisplay").append(userBtn);
        $("#btnDisplay").push(gifButtons);
        //var userBtn = $("<button>");

    })
    .then(function(){
        var userBtn = $("<button>");
        userBtn.addClass("btn btn-info");
        userBtn.text(gifButtons[i]);
        $("#btnDisplay").append(userBtn);
        
    });
    $(".gif").on("click", function() {

        var state = $(this).attr("data-state");
  
        if(state === "still"){
          $(this).attr("src", $(this).attr("data-animate"))
          $(this).attr("data-state", "animate");
        } else {
          $(this).attr("src", $(this).attr("data-still"))
          $(this).attr("data-state", "still");

          //This is supposed to add click and pause functionality to the displayed gifs
        }
    });
        //createInput};
});
    

