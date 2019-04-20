//api key for giphy
//   HIqQtSoyCccofN3yGM5dSVHpNY0gyZU2

//
var userSearch = "";
var queryURL = "https://api.giphy.com/v1/gifs/trending?api_key=HIqQtSoyCccofN3yGM5dSVHpNY0gyZU2";
    
var xhr = $.get("http://api.giphy.com/v1/gifs/search?q=" + userSearch +"&api_key=HIqQtSoyCccofN3yGM5dSVHpNY0gyZU2");
xhr.done(function(data) { 
console.log("success got data", data); });

$.ajax({
    url: queryURL,
    method: "GET"
})
.then(function(response) {
    console.log(response);
    document.write(response);
});