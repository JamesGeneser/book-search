// var apiURL = "https://www.googleapis.com/books/v1/volumes?q=mobydick+inauthors:melville&key=AIzaSyDyUh9tTZjRYDn1uNQbyK8fgrSAGsMKnW4"



// fetch(apiURL)
// .then(function(response){
//     //console.log(response)
//     return response.json()

// })
// .then(function(data){
//     console.log(data)
// })
var searchInput = "universeinanutshell"
var apiKey = "AIzaSyDyUh9tTZjRYDn1uNQbyK8fgrSAGsMKnW4"
var apiURL =
  "https://www.googleapis.com/books/v1/volumes?q="+
  searchInput +
  "&key=" +
  apiKey;

fetch(apiURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data.items);
    var testArr = data.items;
    for (var i = 0; i < testArr.length; i++) {
        
        var titleResults = testArr[i].volumeInfo.title;
        console.log("volumeinfo.title"+titleResults)
        $("#titleResults").append("<a>" + titleResults + "</a>")
        

        var authorResults = testArr[i].volumeInfo.authors
        console.log("volumeinfo.authors"+authorResults);
        $("#authorResults").append("<li>" + titleResults + "</li>")

      console.log("volumeinfo.description"+testArr[i].volumeInfo.description);
    }
  });