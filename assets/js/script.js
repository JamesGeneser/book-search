
$(document).ready(function () {


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
    var searchArr = data.items;
    for (var i = 0; i < searchArr.length; i++) {
        
        var titleResults = searchArr[i].volumeInfo.title;

        var titleId = searchArr[i].id
        console.log("volumeinfo.title"+titleResults)
        console.log(titleId)
        $("#titleResults").append("<a href='' id="+titleId+" >" + titleResults + "</a>"+ "<br>")
        

        var authorResults = searchArr[i].volumeInfo.authors
        // console.log("volumeinfo.authors"+authorResults);
        $("#authorResults").append("<li>" + authorResults + "</li>")

    

    }
})


        var linkEl = $("#titleResults")
        console.log(linkEl)
        linkEl.on("click",showBookData)



  function showBookData(event){
    event.preventDefault()
    selectedTitle = event.target.textContent
    console.log(selectedTitle)
    //Specific book search 
        var bookApiURL = "https://www.googleapis.com/books/v1/volumes?q="+
        selectedTitle +
        "&intitle" +
        "&key=" +
        apiKey;
        fetch(bookApiURL)
         .then(function (response) {
            return response.json();
         })
        .then(function (data) {
            console.log(data.items);
            
        })
        
  }
  ////Book Results

//   var eTag = searchArr[j].etag
// var bookTitle = array 
// var authorName =
})